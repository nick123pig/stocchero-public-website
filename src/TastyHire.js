import React from "react"
import { Anchor } from "react95"

function TastyHire(props) {
  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>
        Tasty Hire
      </h2>
      <p>
        I was the Co-Founder of the now-defunct Tasty Hire. Tasty Hire brought
        the first impression to the forefront of the hiring process. The app
        empowered hiring managers to rapidly browse short videos of job
        applicants along with their resume.
      </p>
      <Anchor href="/portfolio/tastyhire" target="_blank">
        Launch
      </Anchor>
    </div>
  )
}

export default TastyHire
