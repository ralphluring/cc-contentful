import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import ProductsNav from "../components/productsnav"
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
            ...GatsbyContentfulFluid_tracedSVG
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
            ...GatsbyContentfulFluid_tracedSVG
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
        <ProductsNav className={productspageStyles.sidebar} />
        <div className={productspageStyles.maincontent}>
          <div className={productspageStyles.productcontainer}>
            <div className={productspageStyles.solventlessimage}>
              <img
                src={data.solventless.picture.fluid.src}
                alt="solventless"
                className={productspageStyles.image}
              />
            </div>
            <div className={productspageStyles.json}>
              {documentToReactComponents(data.solventless.description.json)}
            </div>
          </div>

          <div className={productspageStyles.productcontainer}>
            <div className={productspageStyles.picture}>
              <img
                src={data.flower.picture.fluid.src}
                alt="flower"
                className={productspageStyles.image}
              />
            </div>

            <div className={productspageStyles.json}>
              {documentToReactComponents(data.flower.description.json)}
            </div>
          </div>

          <div className={productspageStyles.productcontainer}>
            <div className={productspageStyles.picture}>
              <img
                src={data.prerolls.picture.fluid.src}
                alt="prerolls"
                className={productspageStyles.image}
              />
            </div>
            <div className={productspageStyles.json}>
              {documentToReactComponents(data.prerolls.description.json)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductsPage
