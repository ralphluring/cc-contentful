import React from "react"
import { graphql } from "gatsby"
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
  let pdf
  props.data.contentfulShoProduct.coa
    ? (pdf = props.data.contentfulShoProduct.coa.file.url)
    : (pdf = null)
  return (
    <Layout>
      <Head title={props.data.contentfulShoProduct.title} />
      <h1>{props.data.contentfulShoProduct.title}</h1>
      <img
        src={props.data.contentfulShoProduct.picture.fluid.src}
        alt="product iamge"
      />
      <p>{props.data.contentfulShoProduct.description}</p>

      <a href={pdf} target="_blank" rel="noopener noreferrer">
        Download coa
      </a>
    </Layout>
  )
}

export default Shoproduct
