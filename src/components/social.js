import React from "react"
import { FaInstagram } from "react-icons/fa"
import socialStyles from "./socialStyles.module.scss"

const Social = () => {
  return (
    <div className={socialStyles.container}>
      <h4>Find us on Instagram </h4>
      <a
        href="http://www.instagram.com/constellationcannabis"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className={socialStyles.insta} />
      </a>
    </div>
  )
}

export default Social
