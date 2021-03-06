import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "../styles/index.scss"
import dropStyles from "./dropStyles.module.scss"
import { Map, TileLayer, Marker } from "react-leaflet"

import Head from "../components/head"
import Singledropmap from "../components/singledropmap"

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
          <a
            href={props.data.contentfulDrop.websitelink}
            target="_blank"
            rel="noopener noreferrer"
          >
            visit their website
          </a>
        </div>
        <div className={dropStyles.contentcontainer}>
          <div className={dropStyles.dropcontentcontainer}>
            {props.data.contentfulDrop.productsInStock ? (
              documentToReactComponents(
                props.data.contentfulDrop.productsInStock.json
              )
            ) : (
              <></>
            )}
          </div>
          <Singledropmap
            slocation={props.data.contentfulDrop.storeLocation}
            sname={props.data.contentfulDrop.storeName}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Drop
