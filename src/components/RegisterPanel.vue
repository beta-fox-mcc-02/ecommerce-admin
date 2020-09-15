<template>
    <!-- <div class="container">

        <form
        @submit.prevent="register"
        >
            <div class="form-group">
                <h1>Register</h1>
                <label for="email">Email address</label>
                <input type="email" class="form-control" aria-describedby="emailHelp" v-model="dataRegistration.email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="passwordRegisterAdmin" v-model="dataRegistration.password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div> -->

  <div class="wrapper fadeInDown">
    <div id="formContent">
      <!-- Tabs Titles -->

      <!-- Icon -->
      <div class="fadeIn first">
        <h3>Register Admin</h3>
        <!-- <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" /> -->
      </div>

      <!-- Login Form -->
      <form @submit.prevent="register">
        <input type="text" id="login" class="fadeIn second" name="login" placeholder="email" v-model="dataRegistration.email">
        <input type="password" id="password" class="fadeIn third" name="login" placeholder="password"  v-model="dataRegistration.password">
        <input type="submit" class="fadeIn fourth" value="Log In">
      </form>

      <!-- Remind Passowrd -->

    </div>
  </div>
</template>

<script>

export default {
  name: 'RegisterPanel',
  data () {
    return {
      dataRegistration: {
        email: '',
        password: ''
      }
    }
  },
  components: {
  },
  methods: {
    register () {
      this.$store.dispatch('register', this.dataRegistration)
        .then(userRegistered => {
          console.log(userRegistered)
          this.$router.push('/login')
        })
        .catch(err => {
          // this.$store.dispatch('error', err.msg)
          console.log(err, 'ini msgnya==============')
        })
    }
  }
}

</script>

<style>

</style>
