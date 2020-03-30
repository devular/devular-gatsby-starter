import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "./layout"
import { Styled, Grid } from "theme-ui"

const components = Styled // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <MDXProvider components={components}>
        <Grid
          gap={3}
          columns={1}
          mb={[4, 6]}
          sx={{ maxWidth: 600, mx: "auto" }}
        >
          <Styled.h2 as="h1">{mdx.frontmatter.title}</Styled.h2>
          <Styled.hr />
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Grid>
      </MDXProvider>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
