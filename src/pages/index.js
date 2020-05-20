import React, { Fragment } from "react"
import Layout from "../components/layout/"
import Head from "../components/head"
import ImageGallery from "../components/imagegallery"
import Drops from "../components/droproll"
import Signup from "../components/signupform"
import resetStyles from "./reset.module.scss"
import homepageStyles from "./homepage.module.scss"
import InstaRoll from "../components/instaroll/"

const IndexPage = () => {
  return (
    <Fragment>
      <Head />
      <div className={resetStyles.container}>
        <Layout>
          <div className={homepageStyles.container}>
            <ImageGallery />
            <Drops />
            <Signup />
            <InstaRoll />
          </div>
        </Layout>
      </div>
    </Fragment>
  )
}

export default IndexPage
