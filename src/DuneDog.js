import React from "react"
import { Anchor } from "react95"

function DuneDog(props) {
  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>
        Dune Dog Collective
      </h2>
      <p>
        Dune Dog Collective is a small, family-owned artisan collective that
        designs and sells handmade, custom products from artists in the USA.
        While most of our inspiration comes from the deserts of the West, we
        feature works from our partnering artists anywhere in the United States.
        Ceramics, steel, glass and wood are the primary materials we work with
        to create our handmade sandblasted creations and custom orders.
      </p>
      <Anchor href="https://dunedogcollective.com" target="_blank">
        Launch
      </Anchor>
    </div>
  )
}

export default DuneDog
