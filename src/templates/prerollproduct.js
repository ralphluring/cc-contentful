import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulPreRollProduct(slug: { eq: $slug }) {
      title
      slug

      coa {
        file {
          url
        }
      }
    }
  }
`
const Prerollproduct = props => {
  return (
    <Layout>
      <Head title={props.data.contentfulPreRollProduct.title} />
      <h1>{props.data.contentfulPreRollProduct.title}</h1>
    </Layout>
  )
}

export default Prerollproduct
