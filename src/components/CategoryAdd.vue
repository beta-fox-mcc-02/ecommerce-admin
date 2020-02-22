<template>
  <div>
    <h4>ADD CATEGORY</h4>
    <form @submit.prevent="create">
      <label>Name</label><br />
      <input type="text" v-model="name"/><br />
      <input type="submit" class="btn btn-primary"/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CategoryAdd',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    create () {
      const payload = {
        name: this.name
      }
      this.$store.dispatch('createCategory', payload)
        .then(({ data }) => {
          this.$router.push('/categories/list')
          this.$store.commit('SET_MESSAGE', { msg: data.msg, status: true })
        })
        .catch(err => {
          this.$store.commit('SET_MESSAGE', { msg: err.response.data.msg, status: false })
        })
    }
  },
  created () {
    this.$store.commit('SET_MESSAGE', { msg: '', status: null })
  }
}
</script>

<style>

</style>
