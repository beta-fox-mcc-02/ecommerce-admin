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
      <div class="end-bar">
        jiwa
      </div>
    </div>
  </div>
</template>

<script>
// import Products from '../components/Products'
// import AddProducts from '../components/AddProducts'

export default {
  name: 'Admin',
  data () {
    return {
    }
  },
  components: {
    // Products,
    // AddProducts
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
  background-color: #21243d;
  color: white
}
.side-content {
  padding: 10px 15px;
}
</style>
