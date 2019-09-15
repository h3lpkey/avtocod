<template>
  <div class="Auth">
    <div class="login-box">
      <h3 class="tittle tittle__blue">Авторизация</h3>
      <div class="input-box">
        <label for="login" class="auth-label">Логин</label>
        <input type="text"
               autofocus
               id="login"
               class="auth-input"
               @change="error = false"
               v-model="login"
               placeholder="username"/>
      </div>
      <div class="input-box">
        <label for="password" class="auth-label">Пароль</label>
        <input type="password"
               id="password"
               @change="error = false"
               v-model="password"
               v-on:keyup.enter="auth"
               class="auth-input"/>
      </div>
      <button class="btn btn__yellow" v-on:click="auth">Войти</button>
      <p class="error" v-show="error">Wrong username or login</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data: function () {
    return {
      login: 'username',
      password: 'password',
      error: false
    }
  },
  methods: {
    auth: function () {
      if (this.login === 'username' && this.password === 'password') {
        localStorage.authData = JSON.stringify({
          login: 'username',
          password: 'password',
          lastAuth: Date.now()
        })
        this.$router.push({ path: '/' })
      } else {
        this.error = true
      }
    }
  }
}
</script>

<style lang="scss">
  .Auth {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(0deg, #067EFF, #067EFF);
    display: flex;
    justify-content: center;
    align-items: center;

    .login-box {
      width: 460px;
      height: 400px;
      position: relative;
      padding: 30px 0 35px;
      background: #fff;
      border: 1px solid #409CFF;
      box-sizing: border-box;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 500px) {
        width: 292px;
      }

      .tittle {
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.3px;
        margin-top: 0;
        margin-bottom: 18px;

        &__blue {
          color: #409CFF;
        }
      }

      .input-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;

        .auth-label {
          font-weight: 600;
          font-size: 18px;
          line-height: 23px;
          letter-spacing: 0.3px;
          margin-bottom: 10px;
          color: #000000;
        }

        .auth-input {
          width: 307px;
          height: 50px;
          border: 2px solid #CECECE;
          box-sizing: border-box;
          border-radius: 10px;
          font-size: 24px;
          line-height: 30px;
          letter-spacing: 0.3px;
          padding: 0 17px;
          transition: 200ms;

          &::placeholder {
            font-size: 24px;
            line-height: 30px;
            letter-spacing: 0.3px;
            color: #D0D0D1;
          }

          &:focus {
            outline: 0;
            border-color: #409CFF;
          }

          @media (max-width: 500px) {
            width: 225px;
          }
        }
      }

      .btn {
        border-radius: 50px;
        border: none;
        padding: 13px 66px;
        font-weight: bold;
        font-size: 18px;
        line-height: 0;
        letter-spacing: 0.3px;
        transition: 200ms;

        &__yellow {
          background: #FFD306;
          color: #000000;
        }

        &:focus {
          outline: 0;
        }

        &:hover {
          cursor: pointer;
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
      }

      .error {
        position: absolute;
        bottom: 75px;
        color: red;
      }
    }
  }
</style>
