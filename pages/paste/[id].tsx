import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function Paste() {
  const router = useRouter()
  const { id } = router.query
  const [paste, setPaste] = useState<any>(null)

  useEffect(() => {
    if (id) fetchPaste()
  }, [id])

  const fetchPaste = async () => {
    const { data } = await supabase.from('pastes').select('*').eq('id', id).single()
    setPaste(data)
  }

  if (!paste) return <p>Loading...</p>

  return (
    <div className="container">
      <h1>{paste.title}</h1>
      <pre
        style={{
          backgroundColor: '#0d0d0d',
          padding: '20px',
          borderRadius: '10px',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}
      >
        {paste.content}
      </pre>
    </div>
  )
}

