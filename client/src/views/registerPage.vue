<template>
     <div class="container mx-auto" style="width: 20rem; margin-top: 10rem;">
          <h3>Register as admin</h3>
           <img src="../assets/loading.gif" alt="" style="max-width: 20rem;" v-if="seeLoading">
            <form @submit.prevent="register" v-else>
                <div class="form-group">
                    <label for="exampleInputEmail1">name</label>
                    <input type="text" class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter name" v-model="name">
                  </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="" placeholder="Password" v-model="password">
                </div>
                <button type="submit" class="btn btn-primary mb-4">Register</button>
              </form>            
                    <router-link to="loginPage">Login here</router-link>

        </div>
</template>

<script>
name : 'registerPage'
import axios from '../api/axiosInstance'
export default {
    data(){
        return {
            name:'',
            email:'',
            password:''
        }
    },
    computed:{
    seeLoading() { 
      return this.$store.state.loading;
    }
  },
    methods:{
        register(){
        this.$store.commit('SET_LOADING', true)

          axios({
            method: 'post',
            url: '/user/register',
            data: {
              name: this.name,
              email: this.email,
              password: this.password,
              admin: true
            }
          })
          .then(({ data }) => {
            console.log(data);
            
            this.name = ''
            this.email = ''
            this.password = ''
            localStorage.setItem('token', data.token);
            this.$router.push('/admin')
            this.$store.commit('SET_LOADING', false)

            this.$store.commit("SET_LOGIN", true);
            
          })
            .catch(err => {
              console.log(err.response)
              console.log(err.message);
              this.$store.commit('SET_LOADING', false)

                
            })
        },
    }
}
</script>

<style>

</style>
