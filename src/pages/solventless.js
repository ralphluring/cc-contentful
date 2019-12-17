import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import shopageStyles from "./shopage.module.scss"
import Head from "../components/head"

const Shopage = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulShoProduct {
        edges {
          node {
            title
            slug
            description
          }
        }
      }
      contentfulShoPage {
        title
        picture {
          fluid {
            src
          }
        }
        description {
          json
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Solventless Hash Oil" />
      <div className={shopageStyles.container}>
        <h1>{data.contentfulShoPage.title}</h1>
      </div>
    </Layout>
  )
}

export default Shopage
