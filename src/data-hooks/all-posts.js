import { useStaticQuery, graphql } from "gatsby"

export const useAllPosts = () => {
  const { allMdx } = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: [frontmatter___date], order: ASC }) {
        totalCount
        nodes {
          frontmatter {
            title
            publishDate: date(fromNow: false, formatString: "Do MMMM Y")
            fromNow: date(fromNow: true)
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
