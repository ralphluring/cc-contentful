import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import solventlessproductStyles from "./solventlessproductStyles.module.scss"

const SolventlessProducts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulShoProduct {
        edges {
          node {
            description
            slug
            title
            coa {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className={solventlessproductStyles.container}>
      <div>
        <h1>Solventless Hash Oil</h1>
      </div>
      <div className={solventlessproductStyles.productscontainer}>
        {data.allContentfulShoProduct.edges.map(edge => {
          return (
            <div className={solventlessproductStyles.product}>
              <Link to={`solventless/${edge.node.slug}`}>
                {edge.node.title}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SolventlessProducts
