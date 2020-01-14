import React from "react"
import Layout from "../components/layout"
import Drops from "../components/drops"
import Blogroll from "../components/blogroll"
import Headerimg from "../components/headerimg"
import Dropmap from "../components/dropmap"

const IndexPage = () => {
  return (
    <Layout>
      <Headerimg />

      <Drops />
      {typeof window !== `undefined` ? <Dropmap /> : null}

      <Blogroll />
    </Layout>
  )
}

export default IndexPage
