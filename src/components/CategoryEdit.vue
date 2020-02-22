<template>
  <div>
    <h4>CATEGORY EDIT</h4>
    <form @submit.prevent="update">
      <label>Name</label><br />
      <input type="text" v-model="name"/><br />
      <input type="submit" class="btn btn-primary"/>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    update () {
      const payload = {
        name: this.name
      }
      this.$store.dispatch('updateCategory', { id: this.$store.state.categoryId, payload })
        .then(({ data }) => {
          this.$router.push('/categories/list')
          this.$store.commit('SET_MESSAGE', { msg: data.msg, status: true })
        })
        .catch(err => {
          this.$store.commit('SET_MESSAGE', { msg: err.response.data.msg, status: false })
        })
    },
    fetchCategory () {
      this.$store.dispatch('findOneCategory', this.$store.state.categoryId)
        .then(({ data }) => {
          this.$store.commit('SET_CATEGORY', data.data)
          this.name = data.data.name
        })
        .catch(err => {
          this.$store.commit('SET_MESSAGE', { msg: err.response.data.msg, status: false })
        })
    }
  },
  created () {
    this.$store.commit('SET_MESSAGE', { msg: '', status: null })
    this.fetchCategory()
  }
}
</script>

<style>

</style>
