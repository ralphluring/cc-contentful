import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import productspageStyles from "./productspageStyles.module.scss"
import Head from "../components/head"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ProductsPage = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProductType(sort: { fields: updatedAt }) {
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
            <div>
              <img src={edge.node.picture.fluid.src} alt="productimage"></img>
              {documentToReactComponents(edge.node.description.json)}
              <Link
                className={productspageStyles.link}
                to={`/products/${edge.node.slug}`}
              >
                {edge.node.title}
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default ProductsPage
