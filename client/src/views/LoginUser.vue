<template>
  <div class="container">
    <form>
        <div class="form-group">
            <h1>Login</h1>
            <label for="emailLogin">Email address</label>
            <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="mail@mail.com">
        </div>
        <div class="form-group">
            <label for="passwordLogin">Password</label>
            <input type="password" class="form-control" id="passwordLogin">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginUser'
}
</script>

<style>

</style>
