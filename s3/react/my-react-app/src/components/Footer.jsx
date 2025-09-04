import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer style={{ background: "#2563eb", color: "white", padding: "1rem", textAlign: "center", fontSize: "1rem" }}>
        &copy; {new Date().getFullYear()} My React AWS App
      </footer>
    </div>
  )
}

export default Footer
