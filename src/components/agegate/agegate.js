import React, { useState } from "react"
import ageGateStyles from "./agegate.module.scss"
import ls from "local-storage"

const Agegate = () => {
  const [age, setAge] = useState(false)
  const setAgeToStorage = () => {
    ls.set("age", true)
    setAge(true)
  }
  console.log(age)

  return (
    <div className={ageGateStyles.container}>
      <div className={ageGateStyles.text}>
        <h1>Are You 21 or over?</h1>
      </div>
      <button
        onClick={() => {
          setAgeToStorage()
        }}
      >
        YES
      </button>
      <button>
        <a href="http://www.google.com">NO</a>
      </button>
    </div>
  )
}

export default Agegate
