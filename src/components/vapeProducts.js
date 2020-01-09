import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import vapeproductStyles from "./vapeproductstyles.module.scss"

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
    <div className={vapeproductStyles.container}>
      <div>
        <h1>Solventless Vape Cartridges</h1>
      </div>
      <div className={vapeproductStyles.productscontainer}>
        {data.allContentfulVapePenProduct.edges.map(edge => {
          return (
            <div className={vapeproductStyles.product}>
              <Link to={`solventless/carts/${edge.node.slug}`}>
                {edge.node.title}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VapeProducts
