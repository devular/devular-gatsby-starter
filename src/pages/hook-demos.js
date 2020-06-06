import React from "react"
import { Grid, Styled } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useAllPosts } from "../data-hooks/all-posts"

const HookDemos = () => {
  const posts = useAllPosts()
  return (
    <Layout>
      <SEO title="Home" />
      <Grid gap={3} columns={1} mb={[4, 6]} sx={{ maxWidth: [600], m: "auto" }}>
        <Styled.h1>Hook demos</Styled.h1>
        <hr />
        <Styled.h2>Get latest MDX posts</Styled.h2>
        <Styled.pre>
          <code>{JSON.stringify(posts, null, 2)}</code>
        </Styled.pre>
      </Grid>
    </Layout>
  )
}

export default HookDemos
