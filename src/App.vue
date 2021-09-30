<template>
  <div id="app">
    <Quiz class="mb-auto mt-5" />
    <div>
      <p class="text-light small">
        制作: INTO1叠组 - 宇宙宝<br>
        欢迎合作，一起开发<br>
      </p>
    </div>
  </div>
</template>

<script>
import Quiz from './components/Quiz.vue'

export default {
  name: 'App',
  components: {
    Quiz
  }
}
</script>

<style>
#app {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #5FB5CA;
  background: -webkit-linear-gradient(top left, #eeeeee, #5FB5CA, #9999CA);
  background: -moz-linear-gradient(top left, #eeeeee, #5FB5CA, #9999CA);
  background: linear-gradient(to bottom right, #eeeeee, #5FB5CA, #9999CA);
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
a {
  color: lightyellow;
  text-decoration: underline;
}
</style>

