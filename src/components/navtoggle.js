import React from 'react'
import toggleStyles from './toggle.module.scss'
import { bool, func } from 'prop-types';



const Navtoggle = ({open, setOpen})  => {
  return (
    <div className={toggleStyles.container}>
      <button open={open} onClick={() => setOpen(!open)}>Menu</button>
    </div>
  )
}

Navtoggle.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
  
export default Navtoggle