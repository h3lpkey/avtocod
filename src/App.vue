<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  #app {
  @import url('https://fonts.googleapis.com/css?family=Muli:400,600,600i&display=swap');
    font-family: 'Muli', sans-serif;
    color: #252733;
  }
</style>
