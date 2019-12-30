import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import VapeProducts from "../components/vapeProducts"
import SolventlessProducts from "../components/solventlessproducts"
import solventlesssPageStyles from "./solventlessPageStyles.module.scss"

const SolventlessPage = props => {
  return (
    <Layout>
      <Head title="Solventless" />
      <div className={solventlesssPageStyles.container}>
        <SolventlessProducts />
        <VapeProducts />
      </div>
    </Layout>
  )
}

export default SolventlessPage
