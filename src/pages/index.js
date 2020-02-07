import React from "react"
import Layout from "../components/layout"
import Drops from "../components/drops"
import Blogroll from "../components/blogroll"
import Headerimg from "../components/headerimg"
import Dropmap from "../components/dropmap"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Headerimg />

      <Drops />
      {typeof window !== `undefined` ? <Dropmap /> : null}

      <Blogroll />
    </Layout>
  )
}

export default IndexPage
