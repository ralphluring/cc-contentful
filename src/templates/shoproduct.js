import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/index.scss"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulShoProduct(slug: { eq: $slug }) {
      id
      title
      slug
      description
      coa {
        file {
          url
        }
      }
      picture {
        fluid {
          src
        }
      }
    }
  }
`
const Shoproduct = props => {
  return (
    <Layout>
      <Head title={props.data.contentfulShoProduct.title} />
      <h1>{props.data.contentfulShoProduct.title}</h1>
      <img
        src={props.data.contentfulShoProduct.picture.fluid.src}
        alt="product iamge"
      />
      <p>{props.data.contentfulShoProduct.description}</p>
    </Layout>
  )
}

export default Shoproduct
