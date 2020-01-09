import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import shoproductStyles from "./shoproductStyles.module.scss"

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
      <div className={shoproductStyles.container}>
        <div className={shoproductStyles.image}>
          <img
            src={props.data.contentfulShoProduct.picture.fluid.src}
            alt="product iamge"
          />
        </div>

        <div className={shoproductStyles.description}>
          <p>{props.data.contentfulShoProduct.description}</p>

          <a href={pdf} target="_blank" rel="noopener noreferrer">
            See Test results
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Shoproduct
