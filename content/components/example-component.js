import React from "react"
import { Box } from "theme-ui"

// Note this uses values from our theme.js"
const Example = ({ children }) => (
  <Box sx={{ bg: "text", color: "background", p: 3 }}>
    <p sx={{ color: "background", m: 0 }}>{children}</p>
  </Box>
)

export default Example