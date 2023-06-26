import React from "react";
import "../css/login.css";
import "../css/App.css";
const Register = () => {
  return (
    <>
      <section class="holder">
        <div class="form-box">
          <div class="form-value">
            <form action="">
              <h2>Register</h2>
              <div class="inputbox">
                <ion-icon name="person-outline"></ion-icon>
                <input type="text" required />
                <label for="">Username</label>
              </div>
              <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required />
                <label for="">Email</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required />
                <label for="">Password</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required />
                <label for="">Confirm Password</label>
              </div>
              <button class="button">Register</button>
              <div class="register">
                <p>
                  Already have an account? <a href="./login.html">Log in</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
};
export default Register;
