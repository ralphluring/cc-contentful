import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import logoStyles from "./logo.module.scss"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulMainLogo {
        logo {
          fluid {
            src
          }
        }
      }
    }
  `)
  return (
    <Link to="/" className={logoStyles.link}>
      <img
        className={logoStyles.logo}
        src={data.contentfulMainLogo.logo.fluid.src}
      />
    </Link>
  )
}

export default Logo
