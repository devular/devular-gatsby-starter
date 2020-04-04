import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import { Box, Grid, Styled } from "theme-ui"

import { useAllPosts } from "../data-hooks/all-posts"

const PostTeaser = ({ excerpt, title, slug }) => (
  <Link to={slug}>
    <Styled.h2>{title}</Styled.h2>
    <Styled.p>{excerpt}</Styled.p>
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
          <PostTeaser
            excerpt={post.excerpt}
            title={post.frontmatter.title}
            slug={post.fields.slug}
          />
        ))}
      </Grid>
    </Layout>
  )
}

export default HookDemos
