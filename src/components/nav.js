import React from "react"
import { Link } from "gatsby"
import navStyles from "./nav.module.scss"

const Nav = ({ open, setOpen }) => {
  return (
    <ul className={navStyles.list}>
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
          to="/products"
        >
          Products
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
        >
          Merch
        </a>
      </li>

      <li>
        <button
          className={navStyles.navclose}
          open={open}
          onClick={() => setOpen(!open)}
        >
          X
        </button>
      </li>
    </ul>
  )
}

export default Nav
