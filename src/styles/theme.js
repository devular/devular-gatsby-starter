// example theme
import { base } from "@theme-ui/presets"
const theme = {
  ...base,
  colors: {
    ...base.colors,
    text: "#ffd1dc",
    background: "#231f20",
  },
  fonts: {
    body: base.fonts.body,
    heading: base.fonts.body,
  },
  widths: ["960px"],
  styles: {
    ...base.styles,
  },
}
console.log({ theme })

export default theme
