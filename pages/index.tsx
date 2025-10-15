export default function Home() {
  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>OPENBINONE</h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '600px', lineHeight: '1.8' }}>
        A dark, modern hub for secrets and files. Built for speed, style, and a hint of danger.
      </p>
    </div>
  );
}

