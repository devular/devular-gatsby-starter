import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { Flex, Grid, Styled } from "theme-ui"

import { useAllPosts } from "../data-hooks/all-posts"

const PostTeaser = ({
  excerpt,
  wordCount: { words, paragraphs },
  timeToRead,
  frontmatter: { image, publishDate, fromNow, title },
  fields: { slug },
}) => (
  <Link to={slug}>
    <Grid columns={1} gap={[3]}>
      <Grid sx={{ fontFamily: "ui", color: "text" }} columns={[2]} gap={3}>
        <span>{publishDate}</span>
      </Grid>
      <Styled.h2>{title}</Styled.h2>
      <Img fluid={image.childImageSharp.fluid} />
      <Styled.p>{excerpt}</Styled.p>
      <Styled.hr />
      <Flex
        sx={{
          fontFamily: "ui",
          fontSize: 0,
          color: "text",
          justifyContent: "space-between",
        }}
      >
        <span>{timeToRead} minute read</span>
        <span>{words} words</span>
        <span>{fromNow}</span>
      </Flex>
    </Grid>
  </Link>
)

const HookDemos = () => {
  const posts = useAllPosts()
  return (
    <Layout>
      <SEO title="Home" />
      <Grid gap={3} columns={1} mb={[4, 6]} sx={{ maxWidth: [600], m: "auto" }}>
        <Styled.h1 sx={{ fontFamily: "ui", fontWeight: "bold" }}>
          Posts
        </Styled.h1>
        {posts.map(post => (
          <PostTeaser {...post} />
        ))}
      </Grid>
    </Layout>
  )
}

export default HookDemos
