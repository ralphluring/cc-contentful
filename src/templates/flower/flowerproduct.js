import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../../components/head"
import flowerProductStyles from "./flowerProductStyles.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulFlowerProduct(slug: { eq: $slug }) {
      coa {
        file {
          url
        }
      }
      title
      slug
      description {
        json
      }
      picture {
        fluid {
          src
        }
      }
    }
  }
`

const Flowerproduct = props => {
  return (
    <Layout>
      <Head title={props.data.contentfulFlowerProduct.title} />
      <div className={flowerProductStyles.container}>
        <h1>{props.data.contentfulFlowerProduct.title}</h1>
        <img
          src={props.data.contentfulFlowerProduct.picture.fluid.src}
          alt="ganja"
        />
      </div>
    </Layout>
  )
}

export default Flowerproduct
