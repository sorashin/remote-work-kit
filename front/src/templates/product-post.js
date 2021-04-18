import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function ProductPost({data}) {
    return (
        <Layout>
            <div>Hello product post</div>
            <div>{data.allMarkdownRemark.totalCount}</div>
        </Layout>
    )
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
          }
          excerpt
          timeToRead
          html
        }
      }
      totalCount
    }
  }
`