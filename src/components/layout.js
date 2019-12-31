import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Social from "../components/social"
import Signup from "../components/signup"
import SEO from "../components/SEO"
import "../styles/index.scss"
import LayoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <>
      <div class={LayoutStyles.container}>
        <SEO />
        <div class={LayoutStyles.content}>
          <Header />
          {props.children}
        </div>
        <div className={LayoutStyles.socialsignup}>
          <Social />
          <Signup />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
