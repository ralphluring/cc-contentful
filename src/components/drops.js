import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import dropStyles from "./drops.module.scss"

const Drops = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDrop(sort: { fields: dropDate, order: DESC }, limit: 3) {
        edges {
          node {
            dropDate(formatString: "MMMM DD")
            storeName
            storeLocation {
              lat
              lon
            }
            productsInStock {
              json
            }
            storeLogo {
              fixed(width: 100) {
                src
              }
            }
          }
        }
        totalCount
      }
    }
  `)

  return (
    <div className={dropStyles.container}>
      <div className={dropStyles.header}>
        <h1>Recent Drops</h1>

        <Link to="/drops">See All Drops</Link>
      </div>
    </div>
  )
}

export default Drops
