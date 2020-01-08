import React from "react"
import { Link } from "gatsby"
import navStyles from "./nav.module.scss"
import { useSpring, animated } from "react-spring"

const Nav = ({ open, setOpen }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <animated.div style={props} className={navStyles.container}>
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
            target="_blank"
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
    </animated.div>
  )
}

export default Nav
