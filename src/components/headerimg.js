import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import headerimgStyles from "./headerimgStyles.module.scss"

const Headerimg = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulSiteHeader {
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
        src={data.contentfulSiteHeader.siteheader.fluid.src}
        alt="siteheader"
      />
    </div>
  )
}

export default Headerimg
