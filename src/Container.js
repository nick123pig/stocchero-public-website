import React from "react"
import { useDrop } from "react-dnd"
import Windows95Window from "./Windows95Window"
import PortfolioItem from "./PortfolioItem"
import update from "immutability-helper"

const styles = {
  width: "100vw",
  height: "100vh",
  border: "none",
  position: "relative"
}

const Container = ({ windows, setWindows, changeWindow }) => {
  const [, drop] = useDrop({
    accept: "Windows95Window",
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      moveWindow(item.id, left, top)
      return undefined
    }
  })

  const moveWindow = (id, left, top) => {
    setWindows(
      update(windows, {
        [id]: {
          $merge: { left, top }
        }
      })
    )
  }

  return (
    <div ref={drop} style={styles}>
      {Object.keys(windows).map(key =>
        key === "main" ? (
          <Windows95Window
            key={key}
            id={key}
            item={windows[key]}
            changeWindow={changeWindow}
          />
        ) : (
          <PortfolioItem
            key={key}
            id={key}
            item={windows[key]}
            changeWindow={changeWindow}
          />
        )
      )}
    </div>
  )
}

export default Container
