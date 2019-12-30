import React, { useState } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Drops from "../components/drops"
import Blogroll from "../components/blogroll"
import Headerimg from "../components/headerimg"
import ls from "local-storage"

const AgeContext = React.createContext("ofage")

const IndexPage = () => {
  const sessionAge = ls.get("age")
  const [age, setAge] = useState(sessionAge)

  return (
    <AgeContext.Provider value={age}>
      <Layout>
        <Head title="Home" />
        <Headerimg />
        <Drops />
        <Blogroll />
      </Layout>
    </AgeContext.Provider>
  )
}

export default IndexPage
