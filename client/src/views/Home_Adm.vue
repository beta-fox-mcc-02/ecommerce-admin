<template>
  <div class="home_adm">
    <SideBar/>
    <Table/>
  </div>
</template>

<script>
import SideBar from '../components/admin/Sidebar.vue'
import Table from '../components/admin/table.vue'
export default {
  components: {
    SideBar,
    Table
  },
  created () {
    if (localStorage.getItem('token')) {
      this.$store.commit('CHANGE_PAGE', 'home')
      this.$router.push({ path: '/admin' })
    } else {
      this.$store.commit('CHANGE_PAGE', 'login')
      this.$router.push({ path: '/admin/login' })
    }
  }
}
</script>
