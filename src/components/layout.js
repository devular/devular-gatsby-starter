/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import cssReset from "../styles/reset"
import { Global, css } from "@emotion/core"
import Header from "./header"
import { ThemeProvider } from "theme-ui"
import theme from "../styles/theme"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Global styles={cssReset} />
      <Global
        styles={css`
          body {
            -webkit-font-smoothing: antialiased;
            font-family: ${theme.fonts.body};
          }
        `}
      />
      <div sx={{ maxWidth: "700px", px: [10, 20], mx: "auto" }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer></footer>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
