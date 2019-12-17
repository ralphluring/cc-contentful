import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Drops from "../components/drops"
import Blogroll from "../components/blogroll"
const IndexPage = props => {
  return (
    <>
      <Layout>
        <Head title="Home" />
        <Drops />
        <Blogroll />
      </Layout>
    </>
  )
}

export default IndexPage
