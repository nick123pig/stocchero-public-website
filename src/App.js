import React, { useState } from "react"
import "./App.css"
import Container from "./Container.js"

import { createGlobalStyle, ThemeProvider } from "styled-components"
import {
  reset,
  themes,
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  Divider
} from "react95"

import { DndProvider } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"

import { withStyles } from "@material-ui/core/styles"

import LogoIcon from "@material-ui/icons/Public"

const ResetStyles = createGlobalStyle`
  ${reset}
`

const styles = theme => ({
  window: {
    width: "50vw",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      margin: 2
    }
  },
  list: {
    flexWrap: "wrap"
  },
  listItem: {
    fontSize: 12,
    [theme.breakpoints.down("sm")]: {
      fontSize: 10
    }
  }
})

function App(props) {
  const [windows, setWindows] = useState({
    main: { top: 12, left: 12, display: "block" },
    portfolio: { top: 12, left: 12, display: "none" },
    minesweeper: { top: 12, left: 12, display: "none" }
  })
  const [startOpen, setStartOpen] = useState(false)

  const changeWindow = (key, show, contents) => {
    setWindows({
      ...windows,
      [key]: {
        top: 12,
        left: 12,
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
          <AppBar style={{ top: "unset", bottom: 0 }}>
            <Toolbar style={{ justifyContent: "space-between" }}>
              {startOpen && (
                <List
                  horizontalAlign="left"
                  verticalAlign="top"
                  open={startOpen}
                  onClick={() => setStartOpen(false)}
                >
                  <ListItem onClick={() => changeWindow("main", true)}>
                    👨‍💻 Nick Stocchero
                  </ListItem>
                  <ListItem onClick={() => changeWindow("minesweeper", true)}>
                    💣 Minesweeper
                  </ListItem>
                  <Divider />
                  <ListItem onClick={() => window.close()}>
                    💻 Shut Down
                  </ListItem>
                </List>
              )}
              <Button
                onClick={() => setStartOpen(startOpen ? false : true)}
                active={startOpen}
                style={{ fontWeight: "bold" }}
              >
                <LogoIcon style={{ marginLeft: -2, marginRight: 4 }} />
                Start
              </Button>
            </Toolbar>
          </AppBar>
        </DndProvider>
      </ThemeProvider>
    </div>
  )
}

export default withStyles(styles)(App)
