import { useStaticQuery, graphql } from "gatsby"

export const useAllPosts = () => {
  const { allMdx } = useStaticQuery(graphql`{
  allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    nodes {
      frontmatter {
        title
        publishDate: date(fromNow: false, formatString: "Do MMMM Y")
        fromNow: date(fromNow: true)
        image {
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
      }
      fields {
        slug
      }
      timeToRead
      wordCount {
        words
        paragraphs
      }
      excerpt
      body
    }
  }
}
`)
  return allMdx.nodes
}
