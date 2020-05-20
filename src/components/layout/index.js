import React, { Fragment, useState } from "react"
import SEO from "../SEO"
import Nav from "../nav"
import Navtoggle from "../navtoggle"
import Logo from "../logo"
import Footer from "../footer"
import LayoutStyles from "./layout.module.scss"

const Layout = props => {
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <SEO />
      <div className={LayoutStyles.container}>
        <Logo className={LayoutStyles.logo} />
        <Navtoggle open={open} setOpen={setOpen} />
        <Nav open={open} setOpen={setOpen} />
        <div className={LayoutStyles.content}>{props.children}</div>

        <Footer />
      </div>
    </Fragment>
  )
}

export default Layout
