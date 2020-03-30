import React from "react"
import { Styled, Grid } from "theme-ui"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/">
      <Styled.h1
        sx={{
          fontFamily: "ui",
          fontWeight: "bold",
          color: "text",
          my: [3],
          textAlign: "left",
        }}
      >
        {siteTitle}
      </Styled.h1>
    </Link>
  </header>
)

export default Header
