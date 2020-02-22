<template>
  <tr>
    <td>{{ category.id }}</td>
    <td>{{ category.name }}</td>
    <td><a href="#" @click="update(category.id)">Edit</a> || <a href="#" @click="remove(category.id)">Delete</a></td>
  </tr>
</template>

<script>
export default {
  name: 'CategoryDetail',
  props: ['category'],
  data () {
    return {
    }
  },
  methods: {
    update (id) {
      this.$store.commit('SET_CATEGORY_ID', id)
      this.$router.push('/categories/edit')
    },
    remove (id) {
      this.$store.dispatch('deleteCategory', id)
        .then(({ data }) => {
          this.$router.push('/categories')
          this.$store.commit('SET_MESSAGE', { msg: data.msg, status: true })
        })
        .catch(err => {
          this.$store.commit('SET_MESSAGE', { msg: err.response.data.msg, status: false })
        })
    }
  },
  created () {
  }
}
</script>

<style>

</style>
