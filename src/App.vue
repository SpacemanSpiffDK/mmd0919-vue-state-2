<template>
  <div id="app">
    <TodoList />
    <TodoDone />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoDone from './components/TodoDone.vue'


export default {
  name: 'App',
  components: {
    TodoList,
    TodoDone
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  body {
    font-family: Roboto;
  }
</style>
