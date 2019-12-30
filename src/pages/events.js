import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import eventsPageStyles from "./eventsPageStyles.module.scss"

const EventPage = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulEvent {
        edges {
          node {
            body {
              json
            }
            date(formatString: "MMMM DD")
            title
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Events" />
      <div className={eventsPageStyles.container}>
        <div className={eventsPageStyles.header}>
          <h1>Events</h1>
        </div>
        {data.allContentfulEvent.edges.map(edge => {
          return (
            <div className={eventsPageStyles.eventContainer}>
              <p>{edge.node.date}</p>
              <h4> {edge.node.title}</h4>

              {documentToReactComponents(edge.node.body.json)}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default EventPage
