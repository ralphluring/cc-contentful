import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import dropStyles from "./drops.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const url = node
        return <img alt="" src={url} className={dropStyles.logo} />
      },
    },
  }

  return (
    <div className={dropStyles.container}>
      <div className={dropStyles.header}>
        <h1>Recent Drops</h1>
        <div className={dropStyles.links}>
          <Link to="/drops">See All Drops</Link>
          <Link to="/dropmap">See Map</Link>
        </div>
      </div>

      <div className={dropStyles.drops}>
        {data.allContentfulDrop.edges.map(edge => {
          console.log(edge.node.productsInStock)
          return (
            <div className={dropStyles.drop} key={edge.node.id}>
              <div className={dropStyles.dropheader}>
                <div className={dropStyles.logo}>
                  {edge.node.storeLogo !== null ? (
                    <img
                      src={edge.node.storeLogo.fixed.src}
                      alt="store logo"
                      className={dropStyles.storelogo}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <div className={dropStyles.namedate}>
                  <h4 className={dropStyles.dropday}>{edge.node.dropDate}</h4>
                  <h4 className={dropStyles.storeName}>
                    {edge.node.storeName}
                  </h4>
                </div>
              </div>

              {edge.node.productsInStock ? (
                documentToReactComponents(
                  edge.node.productsInStock.json,
                  options
                )
              ) : (
                <></>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Drops
