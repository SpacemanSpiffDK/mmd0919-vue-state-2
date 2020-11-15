<template>
  <div id="removeTasks">
    <button @click="removeAll">Remove all</button>
  </div>
</template>

<script>
export default {
  name: 'RemoveAll',
  methods: {
    removeAll: function () {
      let userConfirm = confirm('are you sure?'); // create a dialogue box, store result in userConfirm Boolean
      if (userConfirm) {
        this.$store.commit("removeAll"); // call on the "removeAll" mutation in store.js
      }
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