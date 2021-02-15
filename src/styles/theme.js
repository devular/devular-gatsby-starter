// example theme
import { base as rootPreset } from "@theme-ui/presets"

const theme = {
  ...rootPreset,
  useColorSchemeMediaQuery: true,
  colors: {
    ...rootPreset.colors,
    background: "#ffd1dc",
    text: "#231f20",
    hoverText: "white",
    modes: {
      dark: {
        text: "#ffd1dc",
        hoverText: "#D3637D",
        background: "#231f20",
      },
    },
  },
  fontWeights: {
    heading: 700,
    body: 400,
  },
  lineHeights: {
    heading: 1.25,
  },
  fonts: {
    body: "Georgia",
    heading: "Helvetica Neue",
    ui: "system-ui",
  },
  widths: ["960px"],
  buttons: {
    primary: {
      transition: "all 0.2s",
      bg: "text",
      color: "background",
      cursor: "pointer",
      fontFamily: "ui",
      fontWeight: "bold",
      borderRadius: 0,
      "&:hover": {
        bg: "hoverText",
        color: "text",
      },
    },
  },
  styles: {
    hr: {
      borderColor: "text",
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
      pre: {
        fontSize: [1, 2],
        lineHeight: 1.4,
        padding: [3, 4],
      },
    },
  },
}

export default theme
