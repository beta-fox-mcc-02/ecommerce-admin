<template>
  <div class="user-view">
    <h1 class="mb-3">User</h1>
    <table class="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <User
        v-for="user in listUser"
        :key="user.id"
        :user="user">
        </User>
      </tbody>
    </table>
  </div>
</template>

<script>
import User from '@/components/User.vue'

export default {
  name: 'userDashboard',
  created () {
    this.$store.commit('SET_MESSAGE', { msg: '', status: null })
    this.fetchUser()
  },
  components: {
    User
  },
  methods: {
    fetchUser () {
      this.$store.dispatch('fetchUser')
    }
  },
  computed: {
    listUser () {
      return this.$store.state.users
    }
  }
}
</script>

<style scoped>
  .user-view {
    padding: 10px 0px
  }
</style>
