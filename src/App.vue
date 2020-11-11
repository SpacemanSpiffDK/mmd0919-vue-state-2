<template>
  <div id="app">
    <TodoList />
    <TodoDone />
    <NewTask />
    <ResetTasks />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoDone from './components/TodoDone.vue'
import NewTask from './components/NewTask.vue'
import ResetTasks from './components/ResetTasks.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoDone,
    NewTask,
    ResetTasks
  }
}
</script>

<style>
  /* https://flatuicolors.com/palette/se */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  body {
    font-family: Roboto;
    font-size: 1rem;
  }
  #app {
    max-width: 640px;
    margin : 1vw auto;
    background-color: #4bcffa;
    padding: 1vw;
  }
  h1 {
    margin: 0 0 1vw 0;
  }
  h2 {
    margin: 1vw 0;
  }
</style>
