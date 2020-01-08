import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "../styles/index.scss"
import dropStyles from "./dropStyles.module.scss"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"

import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulDrop(slug: { eq: $slug }) {
      updatedAt
      slug
      storeName
      address
      websitelink
      storeLocation {
        lat
        lon
      }
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
      <div className={dropStyles.container}>
        <div className={dropStyles.droppageheader}>
          <h1>{props.data.contentfulDrop.storeName}</h1>
          <p>{props.data.contentfulDrop.address}</p>
          <a href={props.data.contentfulDrop.websitelink} target="_blank">
            visit their website
          </a>
        </div>
        <div className={dropStyles.contentcontainer}>
          {documentToReactComponents(
            props.data.contentfulDrop.productsInStock.json
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Drop
