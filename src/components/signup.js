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
            <p>Favorite Product</p>

            <div>
              <input type="radio" id="flower" name="flower" value="flower" />
              <label for="flower">Flower</label>
            </div>

            <div>
              <input type="radio" id="hash" name="hash" value="hash" />
              <label for="hash">Hash</label>
            </div>

            <div>
              <input type="radio" id="preroll" name="preroll" value="preroll" />
              <label for="preroll">Pre-roll</label>
            </div>
            <div>
              <input type="radio" id="vape" name="vape" value="vape" />
              <label for="vape">Vape</label>
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
