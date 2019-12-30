import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import dropmapStyles from "./dropmapStyles.module.scss"
import Head from "../components/head"

const Dropmap = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDrop {
        edges {
          node {
            storeName
            storeLocation {
              lat
              lon
            }
          }
        }
        totalCount
      }
    }
  `)
  const zoom = 6
  if (typeof window !== `undefined`) {
    return (
      <>
        <Head />
        <Map
          className={dropmapStyles.container}
          center={[47.6062, -122.3321]}
          zoom={zoom}
        >
          <TileLayer
            attribution="osm"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {data.allContentfulDrop.edges.map(edge => {
            return (
              <Marker
                className={dropmapStyles.marker}
                position={edge.node.storeLocation}
              >
                <Popup>
                  <h3>{edge.node.storeName}</h3>
                </Popup>
              </Marker>
            )
          })}
        </Map>
      </>
    )
  }
}

export default Dropmap
