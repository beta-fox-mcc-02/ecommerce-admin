<template>
  <div class="admin">
    <div class="content-admin">
      <div class="side-bar">
        <div class="side-content">MANAGE PRODUCTS</div>
        <div class="side-content">MANAGE USERS</div>
      </div>
      <AdminCenterBar/>
      <div class="end-bar">
        jiwa
      </div>
    </div>
  </div>
</template>

<script>
import AdminCenterBar from '../components/AdminCenterBar'

export default {
  name: 'Admin',
  data () {
    return {
    }
  },
  components: {
    AdminCenterBar
  },
  created () {
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
  width: 30vh;
  height: 100vh;
  background-color: #21243d;
  color: white
}
.side-content {
  padding: 10px 15px;
}
</style>
