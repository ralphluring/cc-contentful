import React from "react"
import signupStyles from "./signupStyles.module.scss"
import { FaInstagram } from "react-icons/fa"

const Signup = () => {
  return (
    <div className={signupStyles.container}>
      <form
        name="signup"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <h4>Send us Feedback!</h4>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="signup" />
        <div className={signupStyles.formbody}>
          <p className={signupStyles.name}>
            <label>Name</label>
            <input type="text" name="name" />
          </p>
          <p className={signupStyles.email}>
            <label>Email</label>
            <input type="email" name="email" />
          </p>

          <p className={signupStyles.title}>Favorite Product</p>
          <div className={signupStyles.productcontainer}>
            <div className={signupStyles.field}>
              <p>Flower</p>
              <input type="radio" id="flower" name="signup" value="flower" />
            </div>

            <div className={signupStyles.field}>
              <p>Hash</p>
              <input type="radio" id="hash" name="signup" value="hash" />
            </div>

            <div className={signupStyles.field}>
              <p>Preroll</p>
              <input type="radio" id="preroll" name="signup" value="preroll" />
            </div>
            <div className={signupStyles.field}>
              <p>Vape</p>
              <input type="radio" id="vape" name="signup" value="vape" />
            </div>
          </div>
          <p className={signupStyles.feedbackcontainer}>
            <label className={signupStyles.feedback}>Feedback</label>
            <textarea name="message"></textarea>
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
