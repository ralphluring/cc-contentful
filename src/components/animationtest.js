import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import { useSpring, animated } from "react-spring"

const Animate = () => {
  const props = useSpring({ color: "blue", from: { color: "red" } })
  return <animated.div style={props}>I will fade in</animated.div>
}

export default Animate
