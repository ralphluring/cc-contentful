import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const VapeProducts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulVapePenProduct {
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
        <h1>Solventless Vape Cartridges</h1>
      </div>
      {data.allContentfulVapePenProduct.edges.map(edge => {
        return (
          <Link to={`solventless/carts/${edge.node.slug}`}>
            {edge.node.title}
          </Link>
        )
      })}
    </div>
  )
}

export default VapeProducts
