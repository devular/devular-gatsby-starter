import React from "react"
import { Link } from "gatsby"

export default () => (
  <footer
    sx={{
      fontSize: 1,
      marginTop: "auto",
      fontFamily: "ui",
    }}
  >
    <div
      sx={{
        display: "grid",
        gridTemplateRows: ["repeat(8, 32px)", "repeat(4, 32px)"],
        gridTemplateColumns: ["repeat(2, 1fr)", "repeat(4, 1fr)"],
        gridAutoFlow: "column",
      }}
    >
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
    </div>
    <div
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 3,
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
    </div>
  </footer>
)
