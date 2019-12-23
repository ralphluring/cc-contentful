import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import VapeProducts from "../components/vapeProducts"
import solventlesssPageStyles from "./solventlessPageStyles.module.scss"

const SolventlessPage = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulShoProduct(sort: { fields: createdAt }) {
        edges {
          node {
            title
            slug
            picture {
              fluid {
                src
              }
            }
            description
            coa {
              file {
                url
              }
            }
            createdAt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Solventless" />
      <div className={solventlesssPageStyles.container}>
        <div className={solventlesssPageStyles.header}>
          <h1>Solventless Menu</h1>
        </div>
        <div className={solventlesssPageStyles.productcard}>
          {data.allContentfulShoProduct.edges.map(edge => {
            return (
              <div>
                <Link to={`/solventless/${edge.node.slug}`}>
                  {edge.node.title}
                </Link>
              </div>
            )
          })}
        </div>
        <VapeProducts />
      </div>
    </Layout>
  )
}

export default SolventlessPage
