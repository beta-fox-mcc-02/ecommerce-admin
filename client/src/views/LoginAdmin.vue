<template>
  <form
  @submit.prevent="login"
  >
        <div class="form-group">
            <h1>Login</h1>
            <label for="emailLoginAdmin">Email address</label>
            <input type="email" class="form-control" aria-describedby="emailHelp" v-model="adminLogin.emailAdmin">
        </div>
        <div class="form-group">
            <label for="passwordLoginAdmin">Password</label>
            <input type="password" class="form-control" id="passwordLoginAdmin">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            adminLogin : {
                emailAdmin : "",
                passwordAdmin: ""
            }
        }
    }
}
</script>

<style>

</style>