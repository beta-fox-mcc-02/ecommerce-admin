<template>
  <div id="NavbarG">
    <header>
      <div class="container-fluid">
        <h1
          class="text-center mt-0 pt-0 shadow"
          style="font-family: 'Playfair Display SC', serif; font-weight: normal; font-size: 90px"
        >
          G<span style="font-family: 'serif'; font-size: 20px">&</span>N
        </h1>
        <nav class="navbar navbar-expand-md p-0 shadow">
          <div class="collapse navbar-collapse d-md-flex justify-content-center" id="trigger">
            <ul class="navbar-nav">
              <li class="navbar-item mx-2 shadow">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="navbar-item mx-2">
                <router-link to="/" class="nav-link">Store</router-link>
              </li>
              <li class="navbar-item mx-2">
                <router-link to="/" class="nav-link">
                  My Cart                  
                </router-link>
              </li>
              <li class="navbar-item mx-2">
                <router-link to="/" class="nav-link">About</router-link>
              </li>
              <li class="navbar-item mx-2">
                <router-link to="/login" class="nav-link" v-if="!isLogin">Login</router-link>
              </li>
              <li class="navbar-item mx-2" v-if="isLogin">
                <router-link to="/a" class="nav-link">Logout</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
   name: `Navbar`,
   methods: {

   },
   computed: {
      isLogin() {
         return this.$store.state.isLogin
      }
   }
}
</script>

<style scoped>
header {
  justify-content: center;
  display: flex;
  height: 150px;
  align-items: center;
  text-align: center;
}

h1 {
  color: white;
}

h1:hover {
  color: rgb(233, 32, 65);
  cursor: pointer;
}

.navbar {
  background-color: transparent;
}

.navbar-toggler i {
  color: whitesmoke;
  font-size: 20px;
}

.navbar-nav {
  padding: 4;
}

.nav-link {
  color: white;
  text-transform: uppercase;
  font-family: "Playfair Display SC", sans-serif;
  font-size: 18px;
}

.nav-link:hover {
  /* opacity: 0.8; */
  color: rgb(235, 17, 53);
}
</style>