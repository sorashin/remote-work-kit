import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import ARLogo from '../images/AR.png'
import styled from 'styled-components'

export default function ProductPost({data}) {
    return (
        <Layout>
            <div>Hello product post</div>
            <div>{data.allMarkdownRemark.totalCount}</div>
            <div>{data.markdownRemark.frontmatter.title}</div>
            <ARButton
              id="ApplePay"
              className="QuickLook"
              href=''
              rel="ar"
            >
              ARで見る
              <img src={ARLogo} alt="AR"/>
            </ARButton>
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
    markdownRemark {
      fields {
        slug
      }
      frontmatter {
        description
        price
        title
        ar_url {
          absolutePath
        }
      }
    }
  }
`

const ARButton = styled.a`
  width: 100%;
  margin: 8px 8px 64px;
  /* padding: 10px 80px 10px 80px; */
  font-size: 16px;
  border: solid 2px #333333;
  border-radius: 4px;
  height: 44px;
  line-height: 44px;
  text-decoration: none;
  color: #333;
`