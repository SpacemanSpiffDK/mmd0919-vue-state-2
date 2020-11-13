<template>
  <div id="newTask">
    <input type="text" id="textInput" placeholder="new task" v-model="newTaskText" />
    <button @click="newItem">Send</button>
  </div>  
</template>

<script>
  export default {
    data () {
      return {
        newTaskText: ""
      }
    },
    methods: {
      newItem: function () {
        const item = {
          name: this.newTaskText,
          done: false
        }
        this.$store.state.items.push(item);
        this.newTaskText = "";
      }
    }
  }
</script>

<style scoped>
  #newTask {
    margin: 3vw 0 0 0;
    text-align: right;
  }
  input {
    padding: .5vw;
    font-size: 1rem;
    border: none;
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