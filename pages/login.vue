<template>
  <login>
    <div class="allWrap columns">
      <div class="login-container column is-4 is-offset-4">
        <div class="login-wrap column">
          <div class="login-title" data-tilt>
            <h1>Monjuにログイン</h1>
          </div>

          <form class="login-form validate-form">
            <div
              class="inputsWrap validate-input columns"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <span class="symbol-input column is-1">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </span>
              <input
                class="input column is-11"
                type="text"
                name="email"
                placeholder="Email"
              />
            </div>

            <div
              class="inputsWrap validate-input columns"
              data-validate="Password is required"
            >
              <span class="symbol-input column is-1">
                <i class="fa fa-lock" aria-hidden="true"></i>
              </span>
              <input
                class="input is-11"
                type="password"
                name="pass"
                placeholder="Password"
              />
            </div>

            <div class="buttons container-login-form-btn">
              <button class="login-form-btn button">
                Login
              </button>
            </div>
          </form>

          <hr class="login_hr" />

          <div class="login-authentication">
            <button class="login-auth-facebook login-auth_btn">
              <span class="symbol-input">
                <i class="fab fa-facebook-f fa-4x" aria-hidden="true"></i>
              </span>
            </button>

            <button class="login-auth-twitter login-auth_btn">
              <span class="symbol-input">
                <i class="fab fa-twitter fa-4x" aria-hidden="true"></i>
              </span>
            </button>

            <button class="login-auth-github login-auth_btn">
              <span class="symbol-input">
                <i class="fab fa-github fa-4x" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </login>
</template>

<style lang="scss" scoped>
.allWrap {
  margin-top: 0;
  margin-bottom: 0;
  background-image: url('~assets/images/mountain.jpg');
  background-size: 100% 100%;
  background-position: center center;

  .login-container {
    height: calc(100vh - 57px);
    .login-wrap {
      height: 65vh;
      margin-top: 12.5vh;
      background-color: rgba(#eee, 0.8);
      border: solid 1px #fff;
      border-radius: 10%;
      .login-title {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        font-size: 1.6em;
      }
      .inputsWrap {
        width: 80%;
        margin: 0 auto;
        .symbol-input {
          padding-right: 0;
          padding-left: 0;
        }
        .input {
          margin: 0 auto;
          padding: 0;
          border-top: none;
          border-right: none;
          border-bottom: solid 1px;
          border-left: none;
          border-radius: 0%;
          background-color: transparent;
          box-shadow: none;
          font-size: 1.2em;
        }
      }
      .container-login-form-btn {
        justify-content: center;
        .login-form-btn {
          background-color: #c4d929;
          border-color: transparent;
          color: #fff;
        }
      }
      .login_hr {
        border-top: 1px solid #fff;
      }
      .login-authentication {
        width: 80%;
        margin: 0 auto;
        .login-auth_btn {
          border-radius: 100%;
        }
      }
    }
  }
}
</style>
