import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import droppageStyles from "./droppage.module.scss"
import Head from "../components/head"

const DropPage = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDrop(sort: { fields: updatedAt, order: DESC }) {
        edges {
          node {
            id
            storeName
            slug
            updatedAt(fromNow: true)
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Drops" />
      <ol className={droppageStyles.posts}>
        {data.allContentfulDrop.edges.map(edge => {
          return (
            <li className={droppageStyles.post} key={edge.node.id}>
              <Link to={`/drops/${edge.node.slug}`}>
                <h1>{edge.node.storeName}</h1>
                <p>{edge.node.updatedAt}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default DropPage
