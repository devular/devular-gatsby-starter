import React from "react"
import { useColorMode, Button } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "theme-ui"

const Mode = props => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Button
      onClick={e => {
        setColorMode(colorMode === "default" ? "dark" : "default")
      }}
    >
      {colorMode === "default" ? "Dark" : "Light"} Mode
    </Button>
  )
}

const Header = ({ siteTitle }) => (
  <header
    sx={{
      display: "flex",
      alignItems: "center",
      flexDirection: ["column", "row"],
      justifyContent: "space-between",
      borderBottom: `0.5px solid`,
      borderColor: "text",
      mb: 4,
      px: 4,
      py: 2,
      position: "sticky",
      top: 0,
    }}
  >
    <Link
      sx={{ fontFamily: "ui", fontWeight: 700, fontSize: [6, 3], py: 2 }}
      to="/"
    >
      {siteTitle}
    </Link>
    <Flex
      sx={{
        width: ["100%", "inherit"],
        justifyContent: "space-between",
        m: [2, 0],
      }}
    >
      <Link to="/posts" sx={{ mr: [null, 3] }}>
        <Button>Read Posts</Button>
      </Link>
      <Mode />
    </Flex>
  </header>
)

export default Header
