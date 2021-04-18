import * as React from "react"
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Top from '../components/Top'
import "../styles.css"
import { graphql } from "gatsby"

// data
const links = [
  {
    text: "ブロックマジシャン",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "バルコニーブロック",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "クローバーデスク",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "かたづけザウルス",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "本棚付きロッキングチェア",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "子供と過ごせるスタンディングデスク",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  }
]
const paragraphStyles = {
  margin:0
}
// markup
const IndexPage = ({data}) => {
  return (
    <Layout style={paragraphStyles}>
      <main>
        <Header/>
        <Top links = {links} data = {data}/>
        <h1>{data.allMarkdownRemark.totalCount}</h1>
        <Footer/>
      </main>
    </Layout>
  )
}

export default IndexPage


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
