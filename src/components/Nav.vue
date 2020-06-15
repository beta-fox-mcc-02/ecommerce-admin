<template>
    <div class="col-12 d-flex align-items-center">
      <div class="col-6 p-0">
        <div class="btn logo" @click="redirectTo(getIsLogin)">
          e-toko
        </div>
      </div>
      <div class="col-6 p-0 d-flex justify-content-end" v-if="getIsLogin">
        <div @click="signOut" class="logout-space btn">
          Sign out
          <i class="fas fa-sign-out-alt mx-2"></i>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    signOut () {
      localStorage.removeItem('token')
      this.$router.push({ name: 'Home' })
      this.$store.commit('SETISLOGIN', false)
    },

    redirectTo (isLogin) {
      if (isLogin) {
        this.$router.push({ name: 'Dashboard' })
      } else {
        this.$router.push({ name: 'Home' })
      }
    }
  },
  computed: {
    getIsLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style scoped>
.logout-space {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
}

.btn:hover {
  cursor: pointer;
}

.logo {
  font-family: 'Passion One';
  font-size: 3rem;
}
</style>
