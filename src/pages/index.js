import React from "react"
import { Box, Grid, Image, Themed, Text } from "theme-ui"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BoxOut = () => (
  <>
    <Themed.hr />
    <Grid gap={2} columns={[1, 2]}>
      <Grid gap={2}>
        <Themed.h2>Highlight</Themed.h2>
        <Themed.p>
          Hello world, look at this lovely grid, what a nice play to start
          writing some bits
        </Themed.p>
      </Grid>
      <Grid gap={2}>
        <Themed.h2>Don't Forget</Themed.h2>
        <Themed.p>
          Hello world, look at this lovely grid, what a nice play to start
          writing some bits
        </Themed.p>
      </Grid>
      <Grid gap={2}>
        <Themed.h2>Important</Themed.h2>
        <Themed.p>
          Hello world, look at this lovely grid, what a nice play to start
          writing some bits
        </Themed.p>
      </Grid>
      <Grid gap={2}>
        <Themed.h2>Information</Themed.h2>
        <Themed.p>
          Hello world, look at this lovely grid, what a nice play to start
          writing some bits
        </Themed.p>
      </Grid>
    </Grid>
    <Themed.hr />
  </>
)

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Grid gap={3} columns={1} mb={[4, 6]} sx={{ maxWidth: [600], m: "auto" }}>
      <Box>
        {/* Here's how you load an image from the ./static directory */}
        <Image sx={{ mb: 2 }} src="/aerial.jpg" />
        <Text sx={{ textAlign: "right", fontSize: [0, 1] }}>
          This is a caption
        </Text>
      </Box>
      <Themed.h2>The introduction</Themed.h2>
      <Themed.p>
        Buttry dingbat stupid commenters Jurgen Habermas Arab spring RSS Encyclo
        CNN leaves it there collaboration, Groupon Gutenberg parenthesis iPhone
        app future of narrative digital first church of the savvy Julian Assange
        Innovator's Dilemma fourth estate, collaboration Tumblr tweets Flipboard
        David Foster Wallace the notion of the public Jeff Jarvis prostate.
        Gannett.
      </Themed.p>
      <BoxOut />
      <Themed.p>
        Andy Carvin bringing a tote bag to a knife fight hyperhyperlocal data
        journalism gutter he said she said Walter Lippmann, discuss Frontline
        David Foster Wallace Alberto Ibarguen David Cohn bringing a tote bag to
        a knife fight reporting Walter Cronkite died for your sins, What Would
        Google Do Steve Jobs we will make them pay Aron Pilhofer audience
        atomization overcome abundance.
      </Themed.p>

      <Themed.h2>A continuation of interest</Themed.h2>
      <Themed.p>
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
      </Themed.p>
    </Grid>
  </Layout>
)

export default IndexPage
