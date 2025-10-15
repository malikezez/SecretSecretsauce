import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabaseClient'

export default function Pastes() {
  const [pastes, setPastes] = useState<any[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetchPastes()
  }, [])

  const fetchPastes = async () => {
    const { data } = await supabase
      .from('pastes')
      .select('*')
      .order('created_at', { ascending: false })
    setPastes(data || [])
  }

  const handleAddPaste = async () => {
    if (!title.trim() || !content.trim()) return
    setLoading(true)

    const { data, error } = await supabase
      .from('pastes')
      .insert([{ title, content }])
      .select('id')
      .single()

    setLoading(false)
    if (error) return alert('Error adding paste')

    setTitle('')
    setContent('')
    fetchPastes()
    router.push(`/paste/${data.id}`)
  }

  return (
    <div className="container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Create Paste</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '40px' }}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your paste..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
        />
        <button className="neon-button" onClick={handleAddPaste}>
          {loading ? 'Adding...' : 'Add Paste'}
        </button>
      </div>

      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>All Pastes</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '20px',
        }}
      >
        {pastes.map((paste) => (
          <div
            key={paste.id}
            className="glow-card"
            onClick={() => router.push(`/paste/${paste.id}`)}
            style={{ padding: '20px', cursor: 'pointer' }}
          >
            <h3 style={{ marginBottom: '10px' }}>{paste.title}</h3>
            <p style={{ opacity: 0.8 }}>
              {paste.content.length > 80 ? paste.content.slice(0, 80) + '...' : paste.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
