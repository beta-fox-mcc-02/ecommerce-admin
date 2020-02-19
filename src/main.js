import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store/index';


Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.name !== from.name && to.name !== 'Register' && to.name !== 'Login') {
    if (!localStorage.access_token) next('/');
    else next();
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
