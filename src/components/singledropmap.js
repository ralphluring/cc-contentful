import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import singledropmap from "./singledropmap.module.scss"
import Head from "../components/head"

const Singledropmap = props => {
  const zoom = 18
  if (typeof window !== `undefined`) {
    return (
      <>
        <Head />

        <Map
          className={singledropmap.container}
          center={[props.slocation.lat, props.slocation.lon]}
          zoom={zoom}
        >
          <TileLayer
            attribution="osm"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker
            className={singledropmap.marker}
            position={[props.slocation.lat, props.slocation.lon]}
          >
            <Popup className={singledropmap.popup}>
              <p>{props.sname}</p>
            </Popup>
          </Marker>
        </Map>
      </>
    )
  } else {
    return <></>
  }
}

export default Singledropmap
