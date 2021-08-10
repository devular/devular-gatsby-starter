import { MDXProvider } from "@mdx-js/react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { Flex, Grid, Themed } from "theme-ui"
import Layout from "./layout"

const components = Themed // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <MDXProvider components={components}>
        <Grid gap={3} columns={1} sx={{ maxWidth: 600, mx: "auto" }}>
          <Grid sx={{ fontFamily: "ui", color: "text" }} columns={[3]} gap={3}>
            <span>{mdx.frontmatter.publishDate}</span>
          </Grid>
          <Themed.h2 as="h1">{mdx.frontmatter.title}</Themed.h2>
          {mdx.frontmatter.image && (
            <GatsbyImage image={mdx.frontmatter.image.childImageSharp.gatsbyImageData} />
          )}
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
          <Themed.hr />
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Grid>
      </MDXProvider>
    </Layout>
  );
}

export const pageQuery = graphql`query BlogPostQuery($id: String) {
  mdx(id: {eq: $id}) {
    id
    body
    timeToRead
    frontmatter {
      title
      publishDate: date(fromNow: false, formatString: "Do MMMM Y")
      fromNow: date(fromNow: true)
      image {
        childImageSharp {
          gatsbyImageData(width: 800, layout: CONSTRAINED)
        }
      }
    }
    wordCount {
      words
    }
  }
}
`
