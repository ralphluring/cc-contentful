import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import flowerPageStyles from "./flowerPageStyles.module.scss"

import Head from "../components/head"

const Flowerpage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFlowerProduct {
        edges {
          node {
            title
            slug
            gallery {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Flower" />
      <div className={flowerPageStyles.container}>
        <div className={flowerPageStyles.header}>Flower Menu</div>
        {data.allContentfulFlowerProduct.edges.map(edge => {
          return (
            <div className={flowerPageStyles.productcard}>
              <Link to={`flower/${edge.node.slug}`}>{edge.node.title}</Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Flowerpage
