import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import prerollpageStyles from "./prerollpage.module.scss"
import Head from "../components/head"

const Prerollpage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPreRollProduct {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Pre-rolls" />
      <div className={prerollpageStyles.container}>
        <div className={prerollpageStyles.header}>Pre-roll Menu</div>
        {data.allContentfulPreRollProduct.edges.map(edge => {
          return (
            <div className={prerollpageStyles.productcard}>
              <Link to={`prerolls/${edge.node.slug}`}>{edge.node.title}</Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Prerollpage
