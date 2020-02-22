<template>
  <div class="admin-category-container" justify="center" align="center">
      <h1>
        Categories
      </h1>
      <v-row>
        <v-col
          v-for="{id, name} in categories"
          :key="id"
          cols="12"
          sm="12"
          md="6"
          lg="3"
        >
          <v-card>
            <v-card-title
              v-text="name"
              class="ma-3 pa-6"
            ></v-card-title>
            <v-card-action></v-card-action>
          </v-card>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  created () {
    this.$store.dispatch('getAllCategories')
  }
}
</script>
