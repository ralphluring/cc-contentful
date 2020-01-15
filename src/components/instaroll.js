import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import instarollStyles from "./instaroll.module.scss"
import { FaInstagram } from "react-icons/fa"

const InstaRoll = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 4) {
        edges {
          node {
            original
            caption
            id
            localFile {
              childImageSharp {
                fixed {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className={instarollStyles.container}>
      <div className={instarollStyles.instarollheader}>
        <a href="https://www.instagram.com/constellationcannabis">
          <div className={instarollStyles.titleandlink}>
            <h1> Instagram</h1>
            <FaInstagram className={instarollStyles.instaicon} />
          </div>
        </a>
      </div>
      <div className={instarollStyles.posts}>
        {data.allInstaNode.edges.map(edge => {
          return (
            <div className={instarollStyles.post}>
              <img
                src={edge.node.localFile.childImageSharp.fixed.src}
                alt="insta post"
              ></img>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InstaRoll
