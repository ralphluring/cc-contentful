import React from "react"
import { Link } from "gatsby"
import navStyles from "./nav.module.scss"

const Nav = ({ open, setOpen }) => {
  return (
    <div className={open === true ? navStyles.open : navStyles.container}>
      <ul className={navStyles.list}>
        <li className={navStyles.listItem}>
          <Link
            class={navStyles.link}
            activeClassName={navStyles.active}
            to="/drops"
          >
            Drops
          </Link>
        </li>
        <li className={navStyles.listItem}>
          <Link
            class={navStyles.link}
            activeClassName={navStyles.active}
            to="/blog"
          >
            Blog
          </Link>
        </li>

        <li className={navStyles.listItem}>
          <Link
            class={navStyles.link}
            activeClassName={navStyles.active}
            to="/about"
          >
            About Us
          </Link>
        </li>

        <li className={navStyles.listItem}>
          <Link
            class={navStyles.link}
            activeClassName={navStyles.active}
            to="/events"
          >
            Events
          </Link>
        </li>
        <li className={navStyles.listItem}>
          <a
            class={navStyles.link}
            activeClassName={navStyles.active}
            href="http://www.snakeswag.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Merch
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Nav
