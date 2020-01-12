import React from "react"
import { Link } from "gatsby"
import agegateStyles from "./agegate.module.scss"
import ls from "local-storage"
import { useSpring, animated, config } from "react-spring"
import Logos from "../components/logos"

const circles = []
for (let i = 0; i < 100; i++) {
  circles.push(i)
}

const Agegate = props => {
  const anime = useSpring({
    to: {
      opacity: 1,
    },
    from: { opacity: 0 },
  })

  return (
    <animated.div style={anime} className={agegateStyles.container}>
      <Logos />
      <div className={agegateStyles.modalcontainer}>
        <h6 className={agegateStyles.text}>Are you 21 or over?</h6>
        <div className={agegateStyles.buttons}>
          <button
            className={agegateStyles.button}
            onClick={() => {
              ls.set("age", "yes")
            }}
          >
            <Link to="/">yes</Link>
          </button>
          <button className={agegateStyles.button}>
            <a href="http://www.google.com">no</a>
          </button>
        </div>
      </div>
    </animated.div>
  )
}

export default Agegate
