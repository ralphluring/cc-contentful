import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import productspageStyles from "./productspageStyles.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"

const ProductsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      prerolls: contentfulProductType(slug: { eq: "prerolls" }) {
        title
        description {
          json
        }
        picture {
          fluid {
            src
          }
        }
      }
      solventless: contentfulProductType(slug: { eq: "solventless" }) {
        title
        description {
          json
        }
        picture {
          fluid {
            src
          }
        }
      }
      flower: contentfulProductType(slug: { eq: "flower" }) {
        title
        description {
          json
        }
        picture {
          fluid {
            src
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Products" />
      <div className={productspageStyles.container}>
        <div className={productspageStyles.solventless}>
          <div className={productspageStyles.titleandmenulink}>
            <h1>{data.solventless.title}</h1>
            <Link to="/solventless" className={productspageStyles.link}>
              See Menu
            </Link>
          </div>
          <div className={productspageStyles.picture}>
            <img src={data.solventless.picture.fluid.src} alt="solventless" />
          </div>

          {documentToReactComponents(data.solventless.description.json)}
        </div>
        <div className={productspageStyles.flower}>
          <div className={productspageStyles.titleandmenulink}>
            <h1>{data.flower.title}</h1>
            <Link to="/flower" className={productspageStyles.link}>
              See Menu
            </Link>
          </div>
          <div className={productspageStyles.picture}>
            {" "}
            <img src={data.flower.picture.fluid.src} alt="flower" />
          </div>

          {documentToReactComponents(data.flower.description.json)}
        </div>
        <div className={productspageStyles.prerolls}>
          <div className={productspageStyles.titleandmenulink}>
            <h1> {data.prerolls.title}</h1>
            <Link to="/prerolls" className={productspageStyles.link}>
              See Menu
            </Link>
          </div>
          <div className={productspageStyles.picture}>
            <img src={data.prerolls.picture.fluid.src} alt="prerolls" />
          </div>

          {documentToReactComponents(data.prerolls.description.json)}
        </div>
      </div>
    </Layout>
  )
}

export default ProductsPage
