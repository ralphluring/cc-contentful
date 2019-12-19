import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Drops from "../components/drops"
import Blogroll from "../components/blogroll"
import Headerimg from "../components/Headerimg"
const IndexPage = props => {
  return (
    <>
      <Layout>
        <Head title="Home" />
        <Headerimg />
        <Drops />
        <Blogroll />
      </Layout>
    </>
  )
}

export default IndexPage
