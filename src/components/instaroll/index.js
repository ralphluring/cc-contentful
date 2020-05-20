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
      <div className={instarollStyles.socialheader}>
        <h4>Follow us on Instagram </h4>
        <a href="https://www.instagram.com/constellationcannabis">
          <FaInstagram className={instarollStyles.instaicon} />
        </a>
      </div>
      <div className={instarollStyles.posts}>
        {data.allInstaNode.edges.map(edge => {
          return (
            <div className={instarollStyles.post}>
              <a
                href="https://www.instagram.com/constellationcannabis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={edge.node.localFile.childImageSharp.fixed.src}
                  alt="insta post"
                ></img>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InstaRoll
