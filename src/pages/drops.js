import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import droppageStyles from "./droppage.module.scss"
import Head from "../components/head"

const DropPage = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDrop(sort: { fields: dropDate, order: DESC }) {
        edges {
          node {
            id
            storeName
            slug

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
      </div>

      <ol className={droppageStyles.posts}>
        {data.allContentfulDrop.edges.map(edge => {
          return (
            <li className={droppageStyles.post} key={edge.node.id}>
              {edge.node.storeLogo !== null ? (
                <img
                  src={edge.node.storeLogo.fixed.src}
                  alt="store logo"
                  className={droppageStyles.storelogo}
                />
              ) : (
                <></>
              )}
              <Link to={`/drops/${edge.node.slug}`}>
                <h1>{edge.node.storeName}</h1>
                <p>{edge.node.dropDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default DropPage
