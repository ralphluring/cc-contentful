import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulFlowerProduct(slug: { eq: $slug }) {
      title
      slug
      description {
        json
      }

      coa {
        file {
          url
        }
      }
    }
  }
`
const Flowerproduct = props => {
  return (
    <Layout>
      <Head title={props.data.contentfulFlowerProduct.title} />
      <h1>{props.data.contentfulFlowerProduct.title}</h1>
    </Layout>
  )
}

export default Flowerproduct
