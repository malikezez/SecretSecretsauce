export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        color: "#e0e0e0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Roboto', sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "20px", letterSpacing: "2px" }}>
        OPENBINONE
      </h1>
      <p style={{ fontSize: "1.5rem", maxWidth: "600px", lineHeight: "1.8" }}>
        A dark, modern hub for secrets and files. Built for speed, style, and a hint of danger.
      </p>
      <div style={{ marginTop: "40px" }}>
        <a
          href="#"
          style={{
            padding: "12px 24px",
            backgroundColor: "#ff0000",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "6px",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            ((e.target as HTMLAnchorElement).style.backgroundColor = "#cc0000")
          }
          onMouseOut={(e) =>
            ((e.target as HTMLAnchorElement).style.backgroundColor = "#ff0000")
          }
        >
          Enter
        </a>
      </div>
    </div>
  );
}

