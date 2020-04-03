import React from "react"
import { useColorMode, Button } from "theme-ui"
import { Link } from "gatsby"
import { Grid } from "theme-ui"

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
      sx={{ fontFamily: "ui", fontWeight: 700, fontSize: [3], py: 2 }}
      to="/"
    >
      {siteTitle}
    </Link>
    <Grid columns={2} m={[2, null, 0]}>
      <Link sx={{ ml: "auto", mr: 3 }} to="/posts">
        <Button>Read Posts</Button>
      </Link>
      <Mode />
    </Grid>
  </header>
)

export default Header
