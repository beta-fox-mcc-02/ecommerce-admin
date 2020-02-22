<template>
  <div class="admin">
    <div class="content-admin">
      <div class="side-bar">
        <div class="side-content">
          <router-link class="content" to="/admin/list-products">LIST PRODUCTS</router-link>
        </div>
        <div class="side-content">
          <router-link class="content" to="/admin/add-products">ADD PRODUCTS</router-link>
        </div>
      </div>
      <router-view/>
      <div class="center-bar" v-if="checkLink">
        <img src="https://mbabiolaandco.com.ng/wp-content/uploads/2018/12/Welcome.jpg">
      </div>
      <div class="end-bar">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data () {
    return {
    }
  },
  computed: {
    checkLink () {
      return this.$route.path === '/admin'
    }
  },
  created () {
    if (!localStorage.token) {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped>
.content-admin {
  display: flex;
  justify-content: space-between;
}
.side-bar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40vh;
  height: 100vh;
  background-color: #e1f4f3;
  color: white;
}
.side-content {
  padding: 10px 15px;
}

.center-bar {
  height: 100vh;
  display: flex;
}
</style>
