import React from "react"
import signupStyles from "./signupStyles.module.scss"

const Signup = ({ open, setOpen }) => {
  return (
    <div className={signupStyles.container}>
      <h4 className={signupStyles.formheader}>Send us feedack!</h4>
      <form
        name="signup"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="signup" />
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
            <p className={signupStyles.title}>Favorite Product</p>

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
