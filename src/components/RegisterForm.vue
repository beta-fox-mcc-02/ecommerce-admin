<template>
    <!-- <div class="container">
      <div class="card shadow-lg o-hidden border-0 my-5">
        <div class="card-body p-0">
          <div class="row">
            <div class="col-lg-5 d-none d-lg-flex">
              <div class="flex-grow-1 bg-register-image"
                style="background-image: url(&quot;assets/img/dogs/image2.jpeg&quot;);"></div>
            </div>
            <div class="col-lg-7">
              <div class="p-5">
                <div class="text-center">
                  <h4 class="text-dark mb-4">Create an Account!</h4>
                </div>
                <form class="user">
                  <div class="form-group"><input class="form-control form-control-user" type="text"
                      id="exampleInputUsername" placeholder="Username"
                      name="username" v-model="username"></div>
                  <div class="form-group"><input class="form-control form-control-user" type="email"
                      id="exampleInputEmail" aria-describedby="emailHelp"
                      placeholder="Email Address" name="email" v-model="email"></div>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0"><input class="form-control form-control-user"
                        type="password" id="examplePasswordInput" placeholder="Password"
                        name="password" v-model="password"></div>
                  </div><button class="btn btn-primary btn-block text-white btn-user"
                    type="submit">Register Account</button>
                  <hr><a class="btn btn-primary btn-block text-white btn-google btn-user"
                    role="button"><i class="fab fa-google"></i>&nbsp; Register with Google</a>
                  <hr>
                </form>
                <div class="text-center"><a class="small" href="login.html">Already have an account?
                    Login!</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-9 col-lg-12 col-xl-10">
        <div class="card shadow-lg o-hidden border-0 my-5">
            <div class="card-body p-0">
            <div class="row">
                <div class="col-lg-6 d-none d-lg-flex">
                <div class="flex-grow-1 bg-login-image"
                    style="background-image: url(&quot;assets/img/dogs/image2.jpeg&quot;);"></div>
                </div>
                <div class="col-lg-6">
                <div class="p-5">
                    <div class="text-center">
                    <h4 class="text-dark mb-4">Create an Account!</h4>
                    </div>
                    <form class="user" @submit.prevent="handleRegister">
                    <div class="form-group"><input class="form-control form-control-user"
                        type="text" id="exampleInputUsername" placeholder="Username..."
                        name="username" v-model="username"></div>
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
                        type="submit">Register Account</button>
                    <hr><a class="btn btn-primary btn-block text-white btn-google btn-user"
                        role="button"><i class="fab fa-google"></i>&nbsp; Register with Google</a>
                    <hr>
                    </form>
                    <div class="text-center">
                      <router-link to="/login" class="small">Already have an
                        account?
                        Login!</router-link>
                    </div>
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
  name: 'RegisterForm',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      roles: 'client',
    };
  },
  methods: {
    handleRegister() {
      const newUser = {
        username: this.username,
        email: this.email,
        password: this.password,
        roles: this.roles,
      };
      this.$store.dispatch('register', newUser)
        .then((response) => {
          if (response) {
            this.$router.push('/login');
          }
        })
        .catch((err) => {
          console.log(err, '====== dari error di store register');
        });
    },
  },
};
</script>
