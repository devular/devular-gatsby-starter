// example theme
import { base as rootPreset } from "@theme-ui/presets"

const theme = {
  ...rootPreset,
  colors: {
    ...rootPreset.colors,
    text: "#ffd1dc",
    background: "#231f20",
  },
  fonts: {
    body: rootPreset.fonts.body,
    heading: rootPreset.fonts.body,
  },
  widths: ["960px"],
  styles: {
    hr: {
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
      fontSize: [3, 4],
    },
    p: {
      ...rootPreset.styles.p,
      mb: [1, 2],
      fontSize: [1, 2],
      lineHeight: 1.75,
    },
  },
}

export default theme
