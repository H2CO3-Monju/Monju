<template>
  <login>
    <div class="allWrap">
      <div class="login-container">
        <div class="login-wrap">
          <div class="login-pic" data-tilt>
            <img src="images/img-01.png" alt="IMG" />
          </div>

          <form class="login-form validate-form">
            <span class="login100-form-title">
              ログイン
            </span>

            <div
              class="wrap-input validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                class="input"
                type="text"
                name="email"
                placeholder="Email"
              />
              <span class="focus-input"></span>
              <span class="symbol-input">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div
              class="wrap-input validate-input"
              data-validate="Password is required"
            >
              <input
                class="input"
                type="password"
                name="pass"
                placeholder="Password"
              />
              <span class="focus-input"></span>
              <span class="symbol-input">
                <i class="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div class="container-login-form-btn">
              <button class="login-form-btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </login>
</template>
