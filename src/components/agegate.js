import React from "react"
import { Link } from "gatsby"
import agegateStyles from "./agegate.module.scss"
import ls from "local-storage"

const Agegate = props => {
  return (
    <div className={agegateStyles.container}>
      <div className={agegateStyles.modalcontainer}>
        <img src="" alt="logo"></img>
        <h6>Are you 21 or over?</h6>
        <div className={agegateStyles.buttons}>
          <button
            className={agegateStyles.button}
            onClick={() => {
              ls.set("age", "yes")
            }}
          >
            <Link to="/">yes</Link>
          </button>
          <button className={agegateStyles.button}>no</button>
        </div>
      </div>
    </div>
  )
}

export default Agegate
