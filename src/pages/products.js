import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import productspageStyles from "./productspageStyles.module.scss"
import Head from "../components/head"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ProductsPage = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProductType {
        edges {
          node {
            slug
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
      }
    }
  `)

  return (
    <Layout>
      <Head title="Products" />
      <div className={productspageStyles.container}>
        {data.allContentfulProductType.edges.map(edge => {
          return (
            <div className={productspageStyles.product}>
              <div className={productspageStyles.picture}>
                <img src={edge.node.picture.fluid.src} alt="productimage"></img>
              </div>
              <div className={productspageStyles.description}>
                {documentToReactComponents(edge.node.description.json)}

                <Link
                  className={productspageStyles.link}
                  to={`/products/${edge.node.slug}`}
                >
                  <p>{edge.node.title} Menu</p>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default ProductsPage
