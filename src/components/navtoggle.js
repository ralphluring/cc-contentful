import React from "react"
import toggleStyles from "./toggle.module.scss"
import { bool, func } from "prop-types"
import { FaBars } from "react-icons/fa"

const Navtoggle = ({ open, setOpen }) => {
  return (
    <div className={toggleStyles.container}>
      <FaBars
        className={toggleStyles.button}
        open={open}
        onClick={() => setOpen(!open)}
      />
    </div>
  )
}

Navtoggle.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Navtoggle
