<template>
  <div id="list" v-if="this.$store.getters.numberDoneTodos != 0">
    <h2>Done ({{ this.$store.getters.numberDoneTodos }})</h2>
    <table>
      <tr v-for="(item, index) in this.$store.getters.doneTodos" :key="index">
        <td>{{ item.name }}</td>
        <td><button @click="item.done = false">Done</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "TodoDone",
  };
</script>

<style scoped>
   table {
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  tr:nth-child(2n+1){
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
    padding: .5vw 2vw;
    font-size: 1rem;
    color: #fff;
    font-weight: bold;
    background-color: #05c46b;
    border: none;
    box-shadow: .1vw .1vw .3vw 0 #999;
    cursor: pointer;
  }
</style>