import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import headerimgStyles from "./headerimgStyles.module.scss"

const Headerimg = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulSiteheader {
        siteheader {
          fluid {
            src
          }
        }
      }
    }
  `)

  return (
    <div className={headerimgStyles.container}>
      <img
        src={data.contentfulSiteheader.siteheader.fluid.src}
        alt="siteheader"
      ></img>
    </div>
  )
}

export default Headerimg
