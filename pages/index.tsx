import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '4rem', marginBottom: '80px' }}>OPENBIN</h1>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        <button className="neon-button" onClick={() => router.push('/pastes')}>
          Pastes
        </button>
        <button className="neon-button" onClick={() => router.push('/users')}>
          Users
        </button>
        <button className="neon-button" onClick={() => alert('Coming soon!')}>
          Contact
        </button>
      </div>
    </div>
  )
}

