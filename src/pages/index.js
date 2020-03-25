import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Styled } from "theme-ui"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Styled.h1>Hi people</Styled.h1>
    <Styled.p>Welcome to your new Gatsby site.</Styled.p>
    <Styled.p>Now go build something great.</Styled.p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
