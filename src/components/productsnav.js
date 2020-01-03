import React from "react"
import { Link } from "gatsby"
import productnavStyles from "./productnavStyles.module.scss"

const ProductsNav = () => {
  return (
    <div className={productnavStyles.container}>
      <ul className={productnavStyles.list}>
        <li className={productnavStyles.listItem}>
          <Link
            class={productnavStyles.link}
            activeClassName={productnavStyles.active}
            to="/solventless"
          >
            Solventless
          </Link>
        </li>
        <li className={productnavStyles.listItem}>
          <Link
            class={productnavStyles.link}
            activeClassName={productnavStyles.active}
            to="/drops"
          >
            Flower
          </Link>
        </li>
        <li className={productnavStyles.listItem}>
          <Link
            class={productnavStyles.link}
            activeClassName={productnavStyles.active}
            to="/blog"
          >
            Prerolls
          </Link>
        </li>
        <li className={productnavStyles.listItem}>
          <Link
            class={productnavStyles.link}
            activeClassName={productnavStyles.active}
            to="/products"
          >
            Products
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default ProductsNav
