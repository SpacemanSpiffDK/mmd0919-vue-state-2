import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
// import apiResult from './data/apiResult.js';

Vue.config.productionTip = false

new Vue({
  store,
  // methods: {
    
  // },
  // computed: {
    
  // },
  // mounted: function () {
  //  console.log('mounted');
  // },
  render: h => h(App),
}).$mount('#app')
