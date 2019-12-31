import React from "react"
import signupStyles from "./signupStyles.module.scss"

const Signup = ({ open, setOpen }) => {
  return (
    <div className={signupStyles.container}>
      <form name="contact" method="POST" data-netlify="true">
        <div className={signupStyles.formbody}>
          <p className={signupStyles.name}>
            <label>
              Name <input type="text" name="name" />
            </label>
          </p>
          <p className={signupStyles.email}>
            <label>
              Email <input type="email" name="email" />
            </label>
          </p>
          <div className={signupStyles.productcontainer}>
            <label className={signupStyles.product}>
              Favorite Product{" "}
              <select
                name="product[]"
                className={signupStyles.productselect}
                multiple
              >
                <option value="flower">Flower</option>
                <option value="hash">Hash</option>
                <option value="preroll">Preroll</option>
                <option value="vape">Vape</option>
              </select>
            </label>
          </div>
          <p className={signupStyles.feedbackcontainer}>
            <label className={signupStyles.feedback}>
              Feedback <textarea name="message"></textarea>
            </label>
          </p>
        </div>
        <p className={signupStyles.buttoncontainer}>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

export default Signup
