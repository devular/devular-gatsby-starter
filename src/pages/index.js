import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import { Image, Text, Grid, Box, Styled } from "theme-ui"

const BoxOut = () => (
  <>
    <Styled.hr />
    <Grid gap={2} columns={[1, 2]}>
      <Grid gap={2}>
        <Styled.h2>Highlight</Styled.h2>
        <Styled.p>
          Hello world, look at this lovely grid, what a nice play to start
          writing some bits
        </Styled.p>
      </Grid>
      <Grid gap={2}>
        <Styled.h2>Don't Forget</Styled.h2>
        <Styled.p>
          Hello world, look at this lovely grid, what a nice play to start
          writing some bits
        </Styled.p>
      </Grid>
      <Grid gap={2}>
        <Styled.h2>Important</Styled.h2>
        <Styled.p>
          Hello world, look at this lovely grid, what a nice play to start
          writing some bits
        </Styled.p>
      </Grid>
      <Grid gap={2}>
        <Styled.h2>Information</Styled.h2>
        <Styled.p>
          Hello world, look at this lovely grid, what a nice play to start
          writing some bits
        </Styled.p>
      </Grid>
    </Grid>
    <Styled.hr />
  </>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid gap={3} columns={1} mb={[4, 6]} sx={{ maxWidth: [600], m: "auto" }}>
      <Box>
        {/* Here's how you load an image from the ./static directory */}
        <Image sx={{ mb: 2 }} src="/aerial.jpg" />
        <Text sx={{ textAlign: "right", fontSize: [0, 1] }}>
          This is a caption
        </Text>
      </Box>
      <Styled.h2>The introduction</Styled.h2>
      <Styled.p>
        Buttry dingbat stupid commenters Jurgen Habermas Arab spring RSS Encyclo
        CNN leaves it there collaboration, Groupon Gutenberg parenthesis iPhone
        app future of narrative digital first church of the savvy Julian Assange
        Innovator's Dilemma fourth estate, collaboration Tumblr tweets Flipboard
        David Foster Wallace the notion of the public Jeff Jarvis prostate.
        Gannett.
      </Styled.p>
      <BoxOut />
      <Styled.p>
        Andy Carvin bringing a tote bag to a knife fight hyperhyperlocal data
        journalism gutter he said she said Walter Lippmann, discuss Frontline
        David Foster Wallace Alberto Ibarguen David Cohn bringing a tote bag to
        a knife fight reporting Walter Cronkite died for your sins, What Would
        Google Do Steve Jobs we will make them pay Aron Pilhofer audience
        atomization overcome abundance.
      </Styled.p>

      <Styled.h2>A continuation of interest</Styled.h2>
      <Styled.p>
        Buttry dingbat stupid commenters Jurgen Habermas Arab spring RSS Encyclo
        CNN leaves it there collaboration, Groupon Gutenberg parenthesis iPhone
        app future of narrative digital first church of the savvy Julian Assange
        Innovator's Dilemma fourth estate, collaboration Tumblr tweets Flipboard
        David Foster Wallace the notion of the public Jeff Jarvis prostate.
        Gannett Andy Carvin bringing a tote bag to a knife fight hyperhyperlocal
        data journalism gutter he said she said Walter Lippmann, discuss
        Frontline David Foster Wallace Alberto Ibarguen David Cohn bringing a
        tote bag to a knife fight reporting Walter Cronkite died for your sins,
        What Would Google Do Steve Jobs we will make them pay Aron Pilhofer
        audience atomization overcome abundance.
      </Styled.p>
    </Grid>
  </Layout>
)

export default IndexPage
