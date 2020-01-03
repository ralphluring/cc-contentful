import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import snakeStyles from "./snakes.module.scss"

const Snakes = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/cc_logo_mobileweb-01.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={snakeStyles.container}>
      <Link to="/">
        <Img
          className={snakeStyles.logo}
          fixed={data.file.childImageSharp.fixed}
          alt="snakes"
        />
      </Link>
    </div>
  )
}

export default Snakes
