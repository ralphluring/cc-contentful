import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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
    <div>
      <div>
        <h1>Solventless Hash Oil</h1>
      </div>
      {data.allContentfulShoProduct.edges.map(edge => {
        return (
          <Link to={`solventless/${edge.node.slug}`}>{edge.node.title}</Link>
        )
      })}
    </div>
  )
}

export default SolventlessProducts
