import React, { useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Agegate from "../components/agegate"
import "../styles/index.scss"
import LayoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <>
      <div class={LayoutStyles.container}>
        <div class={LayoutStyles.content}>
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
