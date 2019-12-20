import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/index.scss"
import Head from "../components/head"
import productTypeStyles from "./productTypeStyles.module.scss"

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
          slug
          picture {
            fluid {
              src
            }
          }
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
      <div className={productTypeStyles.container}>
        {props.data.allContentfulShoProduct.edges.map(edge => {
          return (
            <div className={productTypeStyles.products}>
              <img src={edge.node.picture.fluid.src} alt="sho" />
              <Link to={`products//solventless/${edge.node.slug}`}>
                {edge.node.title} - see details
              </Link>
              <p>{edge.node.description}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default ProductTypePage
