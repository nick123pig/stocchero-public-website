import React, { useState } from "react"
import "./App.css"
import Container from "./Container.js"

import { createGlobalStyle, ThemeProvider } from "styled-components"
import { reset, themes } from "react95"

import { DndProvider } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"

import { withStyles } from "@material-ui/core/styles"

const ResetStyles = createGlobalStyle`
  ${reset}
`

const randomPosition = () => Math.ceil(Math.random() * 20) + 12

const styles = theme => ({
  window: {
    width: "50vw",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      margin: 12
    }
  },
  list: {
    flexWrap: "wrap"
  },
  listItem: {
    fontSize: 12
  }
})

function App(props) {
  const [windows, setWindows] = useState({
    main: { top: 12, left: 12, display: "block" },
    portfolio: { top: 12, left: 12, display: "none" }
  })

  const changeWindow = (key, show, contents) => {
    setWindows({
      ...windows,
      [key]: {
        top: randomPosition(),
        left: randomPosition(),
        display: show ? "block" : "none",
        contents
      }
    })
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <DndProvider backend={HTML5Backend}>
          <Container
            windows={windows}
            setWindows={setWindows}
            changeWindow={changeWindow}
          />
        </DndProvider>
      </ThemeProvider>
    </div>
  )
}

export default withStyles(styles)(App)
