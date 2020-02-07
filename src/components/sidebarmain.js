import React from "react"
import { Link } from "gatsby"
import sidebarmainStyles from "./sidebarmain.module.scss"

const SidebarMain = ({ open, setOpen }) => {
  return (
    <div className={sidebarmainStyles.container}>
      <ul className={sidebarmainStyles.list}>
        <li className={sidebarmainStyles.listItem}>
          <Link
            class={sidebarmainStyles.link}
            activeClassName={sidebarmainStyles.active}
            to="/about"
          >
            About Us
          </Link>
        </li>
        <li className={sidebarmainStyles.listItem}>
          <Link
            class={sidebarmainStyles.link}
            activeClassName={sidebarmainStyles.active}
            to="/drops"
          >
            Drops
          </Link>
        </li>
        <li className={sidebarmainStyles.listItem}>
          <Link
            class={sidebarmainStyles.link}
            activeClassName={sidebarmainStyles.active}
            to="/blog"
          >
            Blog
          </Link>
        </li>

        <li className={sidebarmainStyles.listItem}>
          <Link
            class={sidebarmainStyles.link}
            activeClassName={sidebarmainStyles.active}
            to="/events"
          >
            Events
          </Link>
        </li>
        <li className={sidebarmainStyles.listItem}>
          <a
            class={sidebarmainStyles.link}
            activeClassName={sidebarmainStyles.active}
            href="http://www.snakeswag.com"
          >
            Merch
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SidebarMain
