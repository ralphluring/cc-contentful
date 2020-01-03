import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import textlogosStyles from "./textlogo.module.scss"

const Textlogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/cc_logo_mobileweb-02.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={textlogosStyles.container}>
      <Img
        className={textlogosStyles.logo}
        fixed={data.file.childImageSharp.fixed}
        alt="constellation logo text"
      />
    </div>
  )
}

export default Textlogo
