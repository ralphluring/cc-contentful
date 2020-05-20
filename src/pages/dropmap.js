import React from "react"
import Layout from "../components/layout"
import dropmapPageStyles from "./dropmapPage.module.scss"
import Head from "../components/head"
import Dropmap from "../components/dropmap"

const DropmapPage = props => {
  return (
    <Layout>
      <Head title="Dropmap" />
      <div>
        <h3>Drop Map </h3>
        <Dropmap />
      </div>
    </Layout>
  )
}

export default DropmapPage
