import React from "react";
const Login = () => {
  return (
    <>
      <section class="holder">
        <div class="form-box">
          <div class="form-value">
            <form action="">
              <h2>Login</h2>
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
              <div class="forget">
                <label for="">
                  <input type="checkbox" />
                  Remember Me
                  <a href="#">Forget Password</a>
                </label>
              </div>
              <button class="button">Log in</button>
              <div class="register">
                <p>
                  Don't have a account <a href="./register.html">Register</a>
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
export default Login;
