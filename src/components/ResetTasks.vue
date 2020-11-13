<template>
  <div id="resetTasks">
    <button @click="resetItems">reset</button>
  </div>  
</template>

<script>
  export default {
    methods: {
      resetItems: function () {
        this.$store.commit('resetToNotDone');
      }
    }
  }
</script>

<style scoped>
  #newTask {
    margin: 3vw 0 0 0;
    text-align: right;
  }
  button {
    padding: .5vw 2vw;
    font-size: 1rem;
    color: #000;
    font-weight: bold;
    background-color: #d2dae2;
    border: none;
    box-shadow: .1vw .1vw .3vw 0 #999;
    cursor: pointer;
  }
</style>