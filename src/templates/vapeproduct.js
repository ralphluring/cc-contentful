import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulVapePenProduct(slug: { eq: $slug }) {
      title
      slug
      description
      picture {
        fluid {
          src
        }
      }
      coa {
        file {
          url
        }
      }
    }
  }
`
const Vapeproduct = props => {
  let pdf
  props.data.contentfulVapePenProduct.coa
    ? (pdf = props.data.contentfulVapePenProduct.coa.file.url)
    : (pdf = null)
  return (
    <Layout>
      <Head title={props.data.contentfulVapePenProduct.title} />
      <h1>{props.data.contentfulVapePenProduct.title}</h1>
      <img
        src={props.data.contentfulVapePenProduct.picture.fluid.src}
        alt="solventless vape cart"
      />
      <div>
        <div>
          <p>{props.data.contentfulVapePenProduct.description}</p>

          <a href={pdf} target="_blank" rel="noopener noreferrer">
            Download coa
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Vapeproduct
