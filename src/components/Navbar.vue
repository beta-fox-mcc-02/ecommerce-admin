<template>
    <nav class="navbar navbar-light navbar-expand-md shadow-sm navigation-clean-button">
      <div class="container">
        <router-link to="/" class="navbar-brand">Hacktiv8 <i class="fas fa-store"
            style="font-size: 32px;"></i> E-commerce</router-link>
        <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span
            class="sr-only">Toggle navigation</span><span
            class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navcol-1">
          <ul class="nav navbar-nav mr-auto">
            <li class="nav-item" role="presentation">
              <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
            </li>
            <li class="nav-item" role="presentation"></li>
          </ul><span class="navbar-text actions">
            <button class="btn btn-light action-button" v-if="loginStatus"
            @click="logout">Logout</button>
            <router-link to="/login" class="btn btn-light action-button" role="button"
            style="background-color: #4b70dd;"
            v-if="currentPage === 'register'">Log In</router-link>
          <router-link to="/register" class="btn btn-light action-button" role="button"
            style="background-color: #4b70dd;"
            v-if="currentPage === 'login'">Sign Up</router-link>
          </span>
        </div>
      </div>
    </nav>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return {
      currentPage: '',
      route: this.$route.path,
    };
  },
  methods: {
    logRoute() {
      if (localStorage.getItem('access_token')) {
        console.log(this.route);
      } else {
        if (this.route === '/login' || this.route === '/') {
          this.currentPage = 'login';
        }
        if (this.route === '/register' || this.route === '/') {
          this.currentPage = 'register';
        }
      }
      console.log(this.currentPage);
    },
    logout() {
      this.$store.dispatch('logout');
      this.logRoute();
    },
  },
  computed: {
    loginStatus() {
      return this.$store.state.isLogin;
    },
  },
  mounted() {
    this.logRoute();
  },
};
</script>
