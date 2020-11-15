<template>
  <div id="newTask">
    <input type="text" placeholder="new task" v-model="newTaskText" />
    <button @click="newItem">Send</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTaskText: "",          // add this to data so that Vue knows to keep an eye on it
    };
  },
  methods: {
    newItem: function () {
      const item = {            // create a new item to push into the todo list array
        name: this.newTaskText, // set the name to be equal to the text value of the input field
        done: false,            // set "done" to false
      };
      this.$store.state.items.push(item);   // add the new item to the array
      this.newTaskText = "";                // reset the text in the input field
    },
  },
};
</script>

<style scoped>
#newTask {
  margin: 3vw 0 0 0;
  text-align: right;
}
input {
  padding: 0.5vw;
  font-size: 1rem;
  border: none;
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