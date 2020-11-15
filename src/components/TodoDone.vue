<template>
  <div>
    <div class="spacer">
      <button @click="showDone = !showDone">
        <span v-if="showDone">Hide</span>
        <span v-if="!showDone">Show</span>
        done items
      </button>
    </div>
    <div id="todoDone" v-show="showDone">
      <h2>Done ({{ this.$store.getters.numberDoneTodos }})</h2>
      <table>
        <tr v-for="(item, index) in this.$store.getters.doneTodos" :key="index">
          <td>{{ item.name }}</td>
          <td><button @click="item.done = false">Add to list</button></td>
        </tr>
      </table>
      <ResetTasks />
    </div>
  </div>
</template>

<script>
import ResetTasks from "./ResetTasks.vue";

export default {
  name: "TodoDone",
  components: {
    ResetTasks
  },
  data: function () {
    return {
      showDone: false, // Boolean that vue will keep an eye on for changes
    };
  },
};
</script>

<style scoped>
#todoDone {
  background-color: #00000044;
  padding: 1vw;
  margin-top: 1vw;
}
h2 {
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
  background-color: #ff3f34;
  border: none;
  box-shadow: 0.1vw 0.1vw 0.3vw 0 #999;
  cursor: pointer;
}
.spacer {
  margin: 1vw 0;
}
</style>