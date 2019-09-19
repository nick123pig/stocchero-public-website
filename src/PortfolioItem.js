import React from "react"

import { Window, WindowHeader, WindowContent, Button } from "react95"

import { useDrag } from "react-dnd"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  window: {
    width: "70vw",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      margin: 12
    }
  }
})

function PortfolioItem(props) {
  const [{ isDragging }, drag] = useDrag({
    item: {
      id: props.id,
      left: props.item.left,
      top: props.item.top,
      type: "Windows95Window"
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  if (isDragging) return <div ref={drag} />

  return (
    <div
      ref={drag}
      style={{
        display: "flex",
        position: "absolute",
        left: props.item.left,
        top: props.item.top,
        zIndex: 9999
      }}
    >
      <Window
        style={{ display: props.item.display }}
        className={props.classes.window}
      >
        <WindowHeader
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <span>👗 Portfolio.exe</span>
          <Button
            style={{ marginRight: "-6px", marginTop: "1px" }}
            size={"sm"}
            square
            onClick={() => props.changeWindow("portfolio", false)}
          >
            <span
              style={{
                fontWeight: "bold",
                transform: "translateY(-1px)"
              }}
            >
              x
            </span>
          </Button>
        </WindowHeader>
        <WindowContent>{props.item.contents}</WindowContent>
      </Window>
    </div>
  )
}

export default withStyles(styles)(PortfolioItem)
