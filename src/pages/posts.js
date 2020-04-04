import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import { Box, Grid, Styled } from "theme-ui"

import { useAllPosts } from "../data-hooks/all-posts"

const PostTeaser = ({
  excerpt,
  wordCount: { words, paragraphs },
  timeToRead,
  frontmatter: { publishDate, fromNow, title },
  fields: { slug },
}) => (
  <Link to={slug}>
    <Grid columns={1} gap={[3]}>
      <Styled.h2>{title}</Styled.h2>
      <Styled.p>{excerpt}</Styled.p>
      <Grid sx={{ fontFamily: "ui", color: "text" }} columns={[2]} gap={3}>
        <span>{publishDate}</span>
        <span>{fromNow}</span>
      </Grid>
      <Styled.hr />
      <Grid sx={{ fontFamily: "ui", color: "text" }} columns={[2]} gap={3}>
        <span>Time to Read: {timeToRead} minutes</span>
        <span>Word Count: {words} </span>
      </Grid>
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
