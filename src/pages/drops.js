import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import droppageStyles from "./droppage.module.scss"
import Head from "../components/head"

const DropPage = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDrop(limit: 50, sort: { fields: dropDate, order: DESC }) {
        edges {
          node {
            id
            storeName
            slug
            address
            dropDate(fromNow: true)
            storeLogo {
              fixed {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Drops" />
      <div className={droppageStyles.dropheader}>
        <h3>Drops </h3>
        <Link to="/dropmap">see map</Link>
      </div>

      <ul className={droppageStyles.posts}>
        {data.allContentfulDrop.edges.map(edge => {
          return (
            <li className={droppageStyles.post} key={edge.node.id}>
              <Link to={`/drops/${edge.node.slug}`}>
                <h2>{edge.node.storeName}</h2>
              </Link>
              <h5>{edge.node.dropDate}</h5>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default DropPage
