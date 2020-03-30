import React from "react"
import { useColorMode, Button } from "theme-ui"
import { Link } from "gatsby"

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
      justifyContent: "space-between",
      borderBottom: `0.5px solid`,
      borderColor: "text",
      mb: 4,
      px: 4,
      py: 2,
    }}
  >
    <Link
      sx={{ fontFamily: "ui", fontWeight: 700, fontSize: [3], py: 2 }}
      to="/"
    >
      {siteTitle}
    </Link>
    <Button sx={{ ml: "auto", mr: 3 }}>Get the App</Button>
    <Mode />
  </header>
)

export default Header
