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
import { Global, css } from "@emotion/react"
import Header from "./header"
import Footer from "./footer"
import { ThemeProvider } from "theme-ui"
import siteTheme from "../styles/theme"
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
    <ThemeProvider theme={siteTheme}>
      <Global styles={cssReset} />
      <Global
        styles={theme => css`
          body {
            font-family: ${theme.fonts.body};
          }
          html {
            height: 100%;
          }
          body,
          #___gatsby,
          #gatsby-focus-wrapper {
            min-height: 100vh;
            overflow: scroll;
          }
        `}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        sx={{
          px: [4],
          mx: "auto",
          minHeight: "100vh",
          overflow: "scroll",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
