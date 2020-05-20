import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import dropmapStyles from "./dropmap.module.scss"
import Head from "../head"

const Dropmap = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDrop {
        edges {
          node {
            address
            storeName
            storeLocation {
              lat
              lon
            }
            websitelink
          }
        }
        totalCount
      }
    }
  `)
  const zoom = 7
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
                <Popup className={dropmapStyles.popup}>
                  <a
                    href={edge.node.websitelink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {edge.node.storeName}
                  </a>
                  <p>{edge.node.address}</p>
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
