<template>
<div class="all-container">
    <div class="nav">
        <Nav />
    </div>

    <div class="mt-3 d-flex justify-content-center content">
        <div class="signUp-area">
            <h2 align="center">Sign Up</h2>
            <form>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="email">
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" id="password" placeholder="password">
                </div>
                <div class="d-flex align-items-center">
                    <button type="submit" class="btn btn-secondary">Sign Up</button>
                    <router-link to="/">
                        <p class="to-signIn my-0 mx-3">Already have an account</p>
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import Nav from '../components/Nav'

export default {
  name: 'SignUp',
  components: {
    Nav
  }
}
</script>
