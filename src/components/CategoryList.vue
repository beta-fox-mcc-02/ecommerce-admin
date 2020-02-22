<template>
  <div>
    <div v-if="loadingStatus">
      <h3>CATEGORY LIST</h3>
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <Category
          v-for="category in listCategory"
          :key="category.id"
          :category="category"></Category>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Category from '@/components/Category.vue'

export default {
  name: 'CategoryList',
  data () {
    return {
      showModal: true
    }
  },
  components: {
    Category
  },
  methods: {
    fetchCategory () {
      this.$store.dispatch('fetchCategory')
    }
  },
  computed: {
    listCategory () {
      return this.$store.state.categories
    },
    loadingStatus () {
      return this.$store.state.loadingStatus
    }
  },
  created () {
    this.$store.commit('SET_LOADING_STATUS', false)
    this.showModal = true
    this.fetchCategory()
  }
}
</script>

<style scoped>
  h1 {
    color: green;
  }
</style>
