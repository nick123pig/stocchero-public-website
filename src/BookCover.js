import React from "react"
import { Anchor } from "react95"

function BookCover(props) {
  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>
        Book Cover
      </h2>
      <p>
        Academic Work: Developed a book cover for the timeless classic, Crime
        and Punishment.
      </p>
      <Anchor href="/portfolio/cover.pdf" target="_blank">
        Launch
      </Anchor>
    </div>
  )
}

export default BookCover
