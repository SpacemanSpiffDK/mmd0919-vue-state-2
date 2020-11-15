<template>
  <div id="todoList" v-if="this.$store.getters.numberRestTodos != 0">
    <h1>Todo ({{ this.$store.getters.numberRestTodos }})</h1>
    <table>
      <tr v-for="(item, index) in this.$store.getters.restTodos" :key="index">
        <td>{{ item.name }}</td>
        <td><button @click="item.done = true">Done</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TodoList",
};
</script>

<style scoped>
h1 {
  margin: 0 0 1vw 0;
}
table {
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
}
tr:nth-child(2n + 1) {
  background-color: #11111111;
}
td {
  margin: 0;
  text-align: left;
}
td:nth-child(2) {
  text-align: right;
}
button {
  padding: 0.5vw 2vw;
  font-size: 1rem;
  color: #fff;
  font-weight: bold;
  background-color: #05c46b;
  border: none;
  box-shadow: 0.1vw 0.1vw 0.3vw 0 #999;
  cursor: pointer;
}
</style>