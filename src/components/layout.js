import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Social from "../components/social"
import Signup from "../components/signup"
import SEO from "../components/SEO"
import "../styles/index.scss"
import LayoutStyles from "./layout.module.scss"
import SidebarMain from "./sidebarmain"
import ls from "local-storage"
import { useSpring, animated } from "react-spring"

const Layout = props => {
  const anime = useSpring({
    to: { opacity: 1, marginLeft: "0" },
    from: { opacity: 0, marginLeft: "-1000px" },
    config: { duration: 750 },
  })
  return (
    <div class={LayoutStyles.container}>
      <SEO />

      <Header />
      <SidebarMain />

      <div class={LayoutStyles.content}>
        <animated.div className={LayoutStyles.stuff} style={anime}>
          <div className={LayoutStyles.allstuff}>{props.children}</div>
        </animated.div>
      </div>

      <div className={LayoutStyles.socialsignup}>
        <Social />
        <Signup />
        <Footer />
      </div>
    </div>
  )
}

export default Layout
