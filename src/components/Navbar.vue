<template>
    <nav class="navbar navbar-light navbar-expand-md shadow-none navigation-clean-button">
      <div class="container">
        <router-link to="/" class="navbar-brand">Hacktiv8 <i class="fas fa-store"
            style="font-size: 32px;"></i> E-commerce</router-link>
        <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span
            class="sr-only">Toggle navigation</span><span
            class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navcol-1">
          <ul class="nav navbar-nav mr-auto">
            <li class="nav-item" role="presentation"><a class="nav-link active" href="/">Home</a>
            </li>
            <li class="nav-item" role="presentation"></li>
          </ul><span class="navbar-text actions">
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
      console.log(this.$route.path);
      console.log(this.route);
      if (this.route === '/login') {
        this.currentPage = 'login';
      } else if (this.route === '/register') {
        this.currentPage = 'register';
      }
      console.log(this.currentPage);
    },
  },
  watch: {
    // route: () => {
    //   console.log(this.$route.path);
    //   if (this.route === '/login') {
    //     this.currentPage = 'login';
    //   } else if (this.route === '/register') {
    //     this.currentPage = 'register';
    //   }
    // },
  },
  mounted() {
    this.logRoute();
  },
};
</script>
