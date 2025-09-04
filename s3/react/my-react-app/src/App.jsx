import React from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column" }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App