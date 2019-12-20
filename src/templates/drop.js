import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "../styles/index.scss"
import dropPageStyles from "./dropPageStyles.module.scss"

import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulDrop(slug: { eq: $slug }) {
      updatedAt
      slug
      storeName
      productsInStock {
        json
      }
    }
  }
`
const Drop = props => {
  return (
    <Layout>
      <Head title={props.data.contentfulDrop.storeName} />
      <h1>{props.data.contentfulDrop.storeName}</h1>
      <div className={dropPageStyles.container}>
        {documentToReactComponents(
          props.data.contentfulDrop.productsInStock.json
        )}
      </div>
    </Layout>
  )
}

export default Drop
