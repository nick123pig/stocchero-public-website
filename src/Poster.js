import React from "react"
import { Anchor } from "react95"

function Poster(props) {
  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>
        Shark Poster
      </h2>
      <p>Academic Work: Developed a bicolor poster regarding sharks.</p>
      <Anchor href="/portfolio/poster.pdf" target="_blank">
        Launch
      </Anchor>
    </div>
  )
}

export default Poster
