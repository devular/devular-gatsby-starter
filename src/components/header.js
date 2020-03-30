import React from "react"
import { Styled, Grid } from "theme-ui"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      height: "50px",
      display: "flex",
      alignItems: "center",
      borderBottom: `0.5px solid`,
      borderColor: "text",
      mb: 4,
    }}
  >
    <Link
      sx={{ fontFamily: "ui", fontWeight: 700, fontSize: [3], px: 4, py: 2 }}
      to="/"
    >
      {siteTitle}
    </Link>
  </header>
)

export default Header
