import Vue from 'vue'
import Vuex from 'vuex'
// type this in console (without quotation marks) to install vuex "npm install --save vuex"
// remember to stop serve if it is running

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // can be compared to "data" in the Vue app
    // both are reactive. This means that changes in data will spread throughout the app's components (if done right)
    items: [
      {
        name: 'Feed cat',
        done: false
      },
      {
        name: 'Paint door',
        done: false
      },
      {
        name: 'Feed cat again',
        done: false
      },
      {
        name: 'Pay bills',
        done: false
      },
      {
        name: 'Feed cat yet again',
        done: false
      }
    ],
  },
  mutations: {
    // list of functions that changes the data. Must be called from an ACTION to spread throughout the app's components
    // unique to Vuex
    resetToNotDone: state => {
      state.items.forEach(item => {
        item.done = false;
      });
    },
    removeAll: state => {
      state.items = [];
    }
  },
  actions: {
    // list of functions that commit mutations, if you need to make multiple commits or if you need ASYNCHRONOUS functions
    // using an action alerts Vuex to the change state and the change in state will spread throughout the app's components
    // can be compare to "methods" in the Vue app
  },
  getters: {
    // list of functions that return data based on the state variables (much like 'computed' for vue components)
    // we use this to access data, not to change it!
    // can be compare to "computed" in the Vue app
    doneTodos: state => {
      return state.items.filter(item => item.done);
    },
    restTodos: state => {
      return state.items.filter(item => !item.done);
    },
    numberRestTodos: state => {
      return state.items.filter(item => !item.done).length;
    },
    numberDoneTodos: state => {
      return state.items.filter(item => item.done).length;
    }
  }
});