<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-12 col-xl-10">
          <div class="card shadow-lg o-hidden border-0 my-5">
            <div class="card-body p-0">
              <div class="row">
                <div class="col-lg-6 d-none d-lg-flex">
                  <div class="flex-grow-1 bg-login-image"
                    style="background-image: url(&quot;assets/img/fox-bokeh.jpg&quot;);"></div>
                </div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h4 class="text-dark mb-4">Welcome Back!</h4>
                    </div>
                    <form class="user" @submit.prevent="handleLogin">
                      <div class="form-group"><input class="form-control form-control-user"
                          type="email" id="exampleInputEmail" aria-describedby="emailHelp"
                          placeholder="Email Address..." name="email" v-model="email"></div>
                      <div class="form-group"><input class="form-control form-control-user"
                          type="password" id="exampleInputPassword" placeholder="Password"
                          name="password" v-model="password"></div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <div class="form-check"><input
                              class="form-check-input custom-control-input" type="checkbox"
                              id="formCheck-1"><label class="form-check-label custom-control-label"
                              for="formCheck-1">Remember Me</label></div>
                        </div>
                      </div><button class="btn btn-primary btn-block text-white btn-user"
                        type="submit">Login</button>
                      <hr><a class="btn btn-primary btn-block text-white btn-google btn-user"
                        role="button"><i class="fab fa-google"></i>&nbsp; Login with Google</a>
                      <hr>
                    </form>
                    <div class="text-center"><router-link class="small" to="/register">Create an
                        Account!</router-link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('login', payload)
        .then((response) => {
          if (response.data.access_token) {
            localStorage.setItem('access_token', response.data.access_token);
            this.$store.commit('SET_IDTOKEN', response.data.access_token);
            this.$store.commit('SET_ISLOGIN', true);
            this.$router.push('/dashboard');
          }
        })
        .catch((err) => {
          this.$store.commit('SET_ERRORS', err.response);
        });
    },
  },
};
</script>
