import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "./layout"
import { Styled, Grid, Flex } from "theme-ui"

const components = Styled // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  const image = mdx.frontmatter.image
  console.log({ image })
  return (
    <Layout>
      <MDXProvider components={components}>
        <Grid gap={3} columns={1} sx={{ maxWidth: 600, mx: "auto" }}>
          <Grid sx={{ fontFamily: "ui", color: "text" }} columns={[3]} gap={3}>
            <span>{mdx.frontmatter.publishDate}</span>
          </Grid>
          <Styled.h2 as="h1">{mdx.frontmatter.title}</Styled.h2>
          <Img fluid={mdx.frontmatter.image.childImageSharp.fluid} />
          <Flex
            sx={{
              fontFamily: "ui",
              fontSize: 0,
              color: "text",
              justifyContent: "space-between",
            }}
          >
            <span>{mdx.timeToRead} minute read</span>
            <span>{mdx.wordCount.words} words</span>
            <span>{mdx.frontmatter.fromNow}</span>
          </Flex>
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
      timeToRead
      frontmatter {
        title
        publishDate: date(fromNow: false, formatString: "Do MMMM Y")
        fromNow: date(fromNow: true)
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      wordCount {
        words
      }
    }
  }
`
