<template>
    <div class="col-6 m-3 py-5 px-auto signIn-area">
        <form>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" placeholder="email">
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" id="password" placeholder="password">
            </div>
            <button type="submit" class="btn btn-secondary">Sign In</button>
        </form>
        <router-link to="/signUp">
            <p class="to-signIn my-3">Sign up for this site</p>
        </router-link>
    </div>
</template>
