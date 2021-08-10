import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import { Flex, Grid, Themed } from "theme-ui"

import { useAllPosts } from "../data-hooks/all-posts"

const PostTeaser = ({
  excerpt,
  wordCount: { words, paragraphs },
  timeToRead,
  frontmatter: { image, publishDate, fromNow, title },
  fields: { slug },
}) => (
  <Link to={slug}>
    <Grid columns={1} gap={[3]} sx={{ mb: [3, 4, 5] }}>
      <Grid sx={{ fontFamily: "ui", color: "text" }} columns={[2]} gap={3}>
        <span>{publishDate}</span>
      </Grid>
      <Themed.h2>{title}</Themed.h2>
      {image && <GatsbyImage image={image.childImageSharp.gatsbyImageData} />}
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
      <Themed.hr />
      <Themed.p>{excerpt}</Themed.p>
    </Grid>
  </Link>
)

const HookDemos = () => {
  const posts = useAllPosts()
  return (
    <Layout>
      <Seo title="Home" />
      <Grid gap={3} columns={1} mb={[4, 6]} sx={{ maxWidth: [600], m: "auto" }}>
        {posts.map((post, index) => (
          <PostTeaser key={`post-${index}`} {...post} />
        ))}
      </Grid>
    </Layout>
  )
}

export default HookDemos
