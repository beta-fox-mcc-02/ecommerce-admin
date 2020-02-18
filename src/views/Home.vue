<template>
  <div class="home">
<div class="container">
  <br>
    <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
            <div class="card card-signup z-depth-0 text-center">
                <div class="card-header">
                    <img alt="Vuelogo" src="../assets/logo.png" style="width: 100px">
                </div>
                <div class="card-body">
                    <!-- <label>LOGIN</label>
                    <from >
                        <div class="form-group">
                            <label> Email address</label>
                            <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label >Password</label>
                            <input type="password" class="form-control" placeholder="Password">
                            <small id="emailHelp" class="form-text text-muted">Password must more than 5 characters.</small>
                        </div>
                        <button type="submit" class="btn btn-success">Login</button>
                    </from>
                    <br> -->
                    <RegisterCost></RegisterCost>
                </div>
                <div class="card-footer">
                    <router-link to="/admin/login">are you admin</router-link>
                </div>
            </div>
        </div>
        <div class="col-sm"></div>
    </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import RegisterCost from '@/components/Register.vue'
export default {
  name: 'Home',
  components: {
    RegisterCost
  }
}
</script>
