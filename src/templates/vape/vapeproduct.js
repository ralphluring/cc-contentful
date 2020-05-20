import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../../components/head"
import vapeproducttemplateStyles from "./vapeproducttemplatestyles.module.scss"

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

      <div className={vapeproducttemplateStyles.productcontainer}>
        <div className={vapeproducttemplateStyles.description}>
          <p>{props.data.contentfulVapePenProduct.description}</p>
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            See Test Results
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Vapeproduct
