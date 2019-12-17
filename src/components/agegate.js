import React, { useState } from "react"
import { Link } from "gatsby"
import agegateStyles from "./agegate.module.scss"

const Agegate = () => {

      const [ofage, setAge] = useState(ofage)
  return (
    <div className={agegateStyles.container}>
      <div className={agegateStyles.modalcontainer}>
        <img src=""></img>
        <h6>Are you 21 or over?</h6>
        <div className={agegateStyles.buttons}>
          <button
            className={agegateStyles.button}
            onClick={() => setAge(!ofage)}
           
          >
            yes
          </button>
          <button className={agegateStyles.button}>no</button>
        </div>
      </div>
    </div>
  )
}

export default Agegate
