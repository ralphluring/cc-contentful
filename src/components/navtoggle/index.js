import React, { useState } from "react"
import toggleStyles from "./navtoggle.module.scss"
import { bool, func } from "prop-types"
import { FaBars } from "react-icons/fa"

const Navtoggle = ({ open, setOpen }) => {
  return (
    <FaBars
      open={open}
      onClick={() => setOpen(!open)}
      className={toggleStyles.button}
    />
  )
}

Navtoggle.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Navtoggle
