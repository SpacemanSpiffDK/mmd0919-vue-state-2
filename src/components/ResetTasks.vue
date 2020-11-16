<template>
  <div id="resetTasks">
    <button @click="resetItems">reset</button>
  </div>
</template>

<script>
export default {
  name: 'ResetTasks',
  methods: {
    resetItems: function () {
      this.$store.commit("resetToNotDone"); // call on the "resetToNotDone" mutation in store.js
    },
  },
};
</script>

<style scoped>
div {
  margin-top: 1vw;
}
button {
  padding: 0.5vw 2vw;
  font-size: 1rem;
  color: #000;
  font-weight: bold;
  background-color: #d2dae2;
  border: none;
  box-shadow: 0.1vw 0.1vw 0.3vw 0 #999;
  cursor: pointer;
}
</style>