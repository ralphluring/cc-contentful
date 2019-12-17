import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutpageStyles from "./aboutpageStyles.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const AboutPage = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutPage {
        edges {
          node {
            body {
              json
            }
            slug
            title
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="About" />
      <div className={aboutpageStyles.container}>
        {data.allContentfulAboutPage.edges.map(edge => {
          return documentToReactComponents(edge.node.body.json)
        })}
      </div>
    </Layout>
  )
}

export default AboutPage
