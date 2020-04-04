/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import { jsx } from "theme-ui"

const noflash = `
(function() {
  try {
    var mode = localStorage.getItem('theme-ui-color-mode');
    if (!mode) return
    document.body.classList.add('theme-ui-' + mode);
  } catch (e) {
  }
})();
`

export const onRenderBody = ({ setPreBodyComponents }) => {
  const script = jsx("script", {
    dangerouslySetInnerHTML: {
      __html: noflash,
    },
  })
  setPreBodyComponents([script])
}
