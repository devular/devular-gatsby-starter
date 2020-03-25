import React from "react"
import { Styled } from "theme-ui"

const Header = ({ siteTitle }) => (
  <Styled.h1
    sx={{
      fontSize: [2, 4, 6],
      color: "text",
      mx: "auto",
      maxWidth: "widths[0]",
      my: [3],
    }}
  >
    {siteTitle}
  </Styled.h1>
)

export default Header
