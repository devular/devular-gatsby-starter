import React from "react"
import { Styled } from "theme-ui"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
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
)

export default Header
