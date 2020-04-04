import React from "react"
import { Link } from "gatsby"
import { Flex, Grid, Box } from "theme-ui"

export default () => (
  <Box
    as="footer"
    sx={{
      display: "block",
      fontSize: 1,
      fontFamily: "ui",
      maxWidth: 600,
      width: "100%",
      m: "auto",
      mt: 5,
    }}
  >
    <Grid gap={2} columns={[3, 4]}>
      <Link to="/" sx={{ py: 2 }}>
        Home
      </Link>
      <Link to="/work" sx={{ py: 2 }}>
        Work
      </Link>
      <Link to="/blog" sx={{ py: 2 }}>
        Blog
      </Link>
      <Link to="/about" sx={{ py: 2 }}>
        About
      </Link>
      <Link to="/products" sx={{ py: 2 }}>
        Products
      </Link>
      <Link to="/community" sx={{ py: 2 }}>
        Community
      </Link>
      <Link to="/support" sx={{ py: 2 }}>
        Support
      </Link>
      <Link to="/contact" sx={{ py: 2 }}>
        Contact
      </Link>
      <Link to="/support" sx={{ py: 2 }}>
        Support
      </Link>
      <Link to="/products" sx={{ py: 2 }}>
        Products
      </Link>
      <Link to="/contact" sx={{ py: 2 }}>
        Contact
      </Link>
      <Link to="/community" sx={{ py: 2 }}>
        Community
      </Link>
      <Link to="/products" sx={{ py: 2 }}>
        Products
      </Link>
      <Link to="/community" sx={{ py: 2 }}>
        Community
      </Link>
      <Link to="/support" sx={{ py: 2 }}>
        Support
      </Link>
      <Link to="/contact" sx={{ py: 2 }}>
        Contact
      </Link>
    </Grid>
    <Flex
      sx={{
        my: 4,
      }}
    >
      <Link to="/privacy-policy" sx={{ color: "inherit" }}>
        Privacy Policy
      </Link>
      <div sx={{ mx: 1 }} />
      <Link to="/terms-of-use" sx={{ color: "inherit" }}>
        Terms of Use
      </Link>
      <div sx={{ mx: 1 }} />© 2020 Devular
    </Flex>
  </Box>
)
