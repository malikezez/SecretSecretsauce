export default function Users() {
  const staff = [
    { name: 'ShotSB', role: 'Owner' },
  ]

  return (
    <div className="container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Team</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {staff.map((s, i) => (
          <div key={i} className="glow-card" style={{ padding: '20px', minWidth: '200px' }}>
            <h2>{s.name}</h2>
            <p style={{ color: '#ff004f' }}>{s.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


