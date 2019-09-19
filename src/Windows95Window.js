import React, { useState } from "react"
import NickPhoto from "./nick_stocchero.png"
import TastyHireLogo from "./tastyhire.png"
import TastyHire from "./TastyHire"
import MathStudioLogo from "./mathstudio.png"
import MathStudio from "./MathStudio"
import PosterLogo from "./poster.png"
import Poster from "./Poster"
import BookCoverLogo from "./bookcover.png"
import BookCover from "./BookCover"
import DuneDogLogo from "./dunedog.png"
import DuneDog from "./DuneDog"

import "./App.css"

import {
  List,
  ListItem,
  Window,
  WindowHeader,
  WindowContent,
  Tabs,
  Tab,
  TabBody,
  Fieldset,
  Button,
  Avatar,
  TextField,
  TextArea,
  Anchor
} from "react95"

import { useDrag } from "react-dnd"

import { withStyles } from "@material-ui/core/styles"

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

function Windows95Window(props) {
  const [activeTab, setActiveTab] = useState(0)

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
        top: props.item.top
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
          <span>👗 nick_stocchero.exe</span>
          <Button
            style={{ marginRight: "-6px", marginTop: "1px" }}
            size={"sm"}
            square
            onClick={() => props.changeWindow("main", false, null)}
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
        <WindowContent>
          <Fieldset style={{ marginBottom: 24 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 12
              }}
            >
              <Avatar
                style={{ marginRight: 12 }}
                src={NickPhoto}
                alt="Nick Stocchero"
              />
              <Anchor
                href="https://www.linkedin.com/in/nickstocchero/"
                style={{ fontSize: 24, fontWeight: "bold" }}
              >
                Nick Stocchero
              </Anchor>
            </div>
            <h3 style={{ fontSize: 16 }}>
              Technology Architect, Experienced Entrepreneur, All-Around Nice
              Guy
            </h3>
          </Fieldset>

          <Tabs value={activeTab} onChange={setActiveTab}>
            <Tab value={0}>About</Tab>
            <Tab value={1}>Portfolio</Tab>
            <Tab value={2}>Contact</Tab>
          </Tabs>
          <div>
            {activeTab === 0 && (
              <TabBody>
                <Fieldset label="About" style={{ marginBottom: 12 }}>
                  <List inline={true} className={props.classes.list}>
                    <ListItem size="sm">Bradley University</ListItem>
                    <ListItem size="sm">Mathematics Major</ListItem>
                    <ListItem size="sm">High School Math Teacher</ListItem>
                    <ListItem size="sm">Community Volunteer </ListItem>
                    <ListItem size="sm">CompTIA A+/Network+ Certified</ListItem>
                    <ListItem size="sm">Private Pilot</ListItem>
                    <ListItem size="sm">Napervillian</ListItem>
                  </List>
                </Fieldset>
                <Fieldset label="Skills">
                  <List inline={true} className={props.classes.list}>
                    <ListItem size="sm">React</ListItem>
                    <ListItem size="sm">Node.js</ListItem>
                    <ListItem size="sm">Webpack</ListItem>
                    <ListItem size="sm">Java</ListItem>
                    <ListItem size="sm">Docker</ListItem>
                    <ListItem size="sm">Maven</ListItem>
                    <ListItem size="sm">Machine Learning</ListItem>
                    <ListItem size="sm">Blockchain</ListItem>
                    <ListItem size="sm">Accumulo</ListItem>
                    <ListItem size="sm">Statistics/Data Science</ListItem>
                    <ListItem size="sm">Serverless</ListItem>
                    <ListItem size="sm">Big Data</ListItem>
                    <ListItem size="sm">Ruby/Rails/Sinatra</ListItem>
                    <ListItem size="sm">AWS</ListItem>
                    <ListItem size="sm">SQL</ListItem>
                    <ListItem size="sm">Devops</ListItem>
                    <ListItem size="sm">IoT</ListItem>
                    <ListItem size="sm">Git</ListItem>
                    <ListItem size="sm">Drupal</ListItem>
                    <ListItem size="sm">Wordpress</ListItem>
                    <ListItem size="sm">Chef</ListItem>
                    <ListItem size="sm">PHP</ListItem>
                    <ListItem size="sm">LaTeX</ListItem>
                  </List>
                </Fieldset>
              </TabBody>
            )}
            {activeTab === 1 && (
              <TabBody>
                <List fullWidth className={props.classes.list}>
                  <ListItem
                    onClick={() =>
                      props.changeWindow("portfolio", true, <DuneDog />)
                    }
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Avatar style={{ marginRight: 8 }} src={DuneDogLogo} />
                      Dune Dog Collective
                    </div>
                  </ListItem>
                  <ListItem
                    onClick={() =>
                      props.changeWindow("portfolio", true, <TastyHire />)
                    }
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Avatar style={{ marginRight: 8 }} src={TastyHireLogo} />
                      TastyHire
                    </div>
                  </ListItem>
                  <ListItem
                    onClick={() =>
                      props.changeWindow("portfolio", true, <MathStudio />)
                    }
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Avatar style={{ marginRight: 8 }} src={MathStudioLogo} />
                      Math Studio
                    </div>
                  </ListItem>
                  <ListItem
                    onClick={() =>
                      props.changeWindow("portfolio", true, <Poster />)
                    }
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Avatar style={{ marginRight: 8 }} src={PosterLogo} />
                      Shark Poster
                    </div>
                  </ListItem>
                  <ListItem
                    onClick={() =>
                      props.changeWindow("portfolio", true, <BookCover />)
                    }
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Avatar style={{ marginRight: 8 }} src={BookCoverLogo} />
                      Book Cover
                    </div>
                  </ListItem>
                </List>
              </TabBody>
            )}
            {activeTab === 2 && (
              <TabBody>
                <form
                  action="//formspree.io/nick123pig@gmail.com"
                  method="POST"
                  name="sentMessage"
                  id="contactForm"
                  noValidate
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="New submission!"
                  />
                  <input
                    type="text"
                    name="_gotcha"
                    style={{ display: "none" }}
                  />
                  <div>
                    <TextField name="name" placeholder="Your Name" />
                  </div>
                  <div>
                    <TextField
                      type="email"
                      name="_replyto"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div>
                    <TextArea
                      name="message"
                      placeholder="Your Message"
                      required
                    />
                  </div>
                  <div>
                    <Button type="submit">Send</Button>
                  </div>
                </form>
              </TabBody>
            )}
          </div>
        </WindowContent>
      </Window>
    </div>
  )
}

export default withStyles(styles)(Windows95Window)
