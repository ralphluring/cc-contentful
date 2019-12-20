import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/index.scss"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulProductType(slug: { eq: $slug }) {
      title
    }
    allContentfulShoProduct {
      edges {
        node {
          title
          description
        }
      }
    }
  }
`
const ProductTypePage = props => {
  return (
    <Layout>
      <Head title={props.data.contentfulProductType.title} />
      <h1>{props.data.contentfulProductType.title}</h1>

      {props.data.allContentfulShoProduct.edges.map(edge => {
        return (
          <div>
            <h5>{edge.node.title}</h5>
            <p>{edge.node.description}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export default ProductTypePage
