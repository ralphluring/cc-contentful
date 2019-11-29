
import React, { } from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import dropmapStyles from './dropmapStyles.module.scss'


const Dropmap = () => {
  
  const data = useStaticQuery(graphql` 
    query {
        allContentfulRetailerStock {
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
   
  const zoom = 7;
  // Wrap the require in check for window
  if (typeof window !== `undefined`) {

    return (
      <Map center={[47.6062,-122.3321]} zoom={zoom} className={dropmapStyles.container}>
      <TileLayer
        attribution='osm'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />


      {data.allContentfulRetailerStock.edges.map(edge => {
        return(
            <Marker position={edge.node.storeLocation}>
            <Popup>
              <h3>{edge.node.storeName}</h3>
            </Popup>
          </Marker>
        )
    
      })}
    </Map>
  )
   
  }
 

  
}

export default Dropmap