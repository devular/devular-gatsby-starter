import React from "react"
import { Grid, Themed } from "theme-ui"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useAllPosts } from "../data-hooks/all-posts"

const HookDemos = () => {
  const posts = useAllPosts()
  return (
    <Layout>
      <Seo title="Home" />
      <Grid gap={3} columns={1} mb={[4, 6]} sx={{ maxWidth: [600], m: "auto" }}>
        <Themed.h1>Hook demos</Themed.h1>
        <hr />
        <Themed.h2>Get latest MDX posts</Themed.h2>
        <Themed.pre>
          <code>{JSON.stringify(posts, null, 2)}</code>
        </Themed.pre>
      </Grid>
    </Layout>
  )
}

export default HookDemos
