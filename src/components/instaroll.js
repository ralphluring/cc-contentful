import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import instarollStyles from "./instaroll.module.scss"
import { FaInstagram } from "react-icons/fa"

const InstaRoll = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 8) {
        edges {
          node {
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
            <h1> #ConstellationCannabis</h1>
            <FaInstagram className={instarollStyles.instaicon} />
          </div>
        </a>
      </div>
      <div className={instarollStyles.posts}>
        {data.allInstaNode.edges.map(edge => {
          return (
            <div className={instarollStyles.postcontainer}>
              <div className={instarollStyles.postimg}>
                <img src={edge.node.localFile.childImageSharp.fixed.src}></img>
              </div>
              <p className={instarollStyles.caption}>
                {edge.node.caption.slice(0, 200)}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InstaRoll
