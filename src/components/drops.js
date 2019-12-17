import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import dropStyles from "./drops.module.scss"
import Dropmap from "../components/dropmap"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Drops = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDrop {
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
        <h1>{data.allContentfulDrop.totalCount} Recent Drops</h1>
      </div>

      <div className={dropStyles.drops}>
        {data.allContentfulDrop.edges.map(edge => {
          return (
            <div className={dropStyles.drop} key={edge.node.id}>
              <div className={dropStyles.datenstore}>
                <h6 className={dropStyles.dropday}>{edge.node.dropDate}</h6>
                <div className={dropStyles.namelogo}>
                  {edge.node.storeLogo !== null ? (
                    <img
                      src={edge.node.storeLogo.fixed.src}
                      alt="store logo"
                      className={dropStyles.storelogo}
                    />
                  ) : (
                    <h4 className={dropStyles.storeName}>
                      {edge.node.storeName}
                    </h4>
                  )}
                </div>
              </div>
              {documentToReactComponents(
                edge.node.productsInStock.json,
                options
              )}
            </div>
          )
        })}
      </div>
      {typeof window !== `undefined` ? <Dropmap /> : null}
    </div>
  )
}

export default Drops
