import React from "react"
import { Anchor } from "react95"

function MathStudio(props) {
  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>
        Math Studio
      </h2>
      <p>Developed a static page which included a flash file.</p>
      <Anchor href="/portfolio/mathstudio" target="_blank">
        Launch
      </Anchor>
    </div>
  )
}

export default MathStudio
