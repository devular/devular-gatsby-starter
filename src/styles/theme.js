// example theme
import { base as rootPreset } from "@theme-ui/presets"

const theme = {
  ...rootPreset,
  colors: {
    ...rootPreset.colors,
    background: "#ffd1dc",
    text: "#231f20",
  },
  fontWeights: {
    heading: 400,
    body: 400,
  },
  lineHeights: {
    heading: 1.25,
  },
  fonts: {
    body: "Georgia",
    heading: "NewYorkSmall-MediumItalic",
    ui: "system-ui",
  },
  widths: ["960px"],
  styles: {
    hr: {
      borderColor: "black",
      ...rootPreset.styles.hr,
      width: "100%",
    },
    ...rootPreset.styles,
    h1: {
      ...rootPreset.styles.h1,
      fontSize: [5, 6],
    },
    h2: {
      ...rootPreset.styles.h2,
      fontSize: [4, 5],
    },
    p: {
      ...rootPreset.styles.p,
      mb: [1, 2],
      fontSize: ["1.125rem", "1.25rem"],
      lineHeight: ["1.5625rem", "1.875rem"],
      maxWidth: "600px",
    },
    root: {
      "h1, h2, h4, h4, p": {
        margin: 0,
      },
      a: {
        color: "text",
        textDecoration: "none",
      },
      body: {
        webkitFontSmoothing: "antialiased",
        fontFamily: "body",
      },
      html: {
        height: "100%",
      },
      "#gatsby-focus-wrapper, #___gatsby, body": {
        minHeight: "100vh",
        overflow: "scroll",
      },
    },
  },
}

export default theme
