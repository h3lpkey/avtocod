<template>
  <nav class="menu">
    <p class="title">Demo application</p>
    <ul class="menu-items">
      <li class="menu-item menu-item__active">
        <span class="icon icon-record"></span>
        <a href="#">Список отчётов</a>
      </li>
      <li class="menu-item" v-on:click="loguot">
        <span class="icon icon-quit"></span>
        <a href="#">Выход</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import './_menu.scss'
export default {
  props: {},
  methods: {
    loguot: function () {
      localStorage.authData = ''
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
