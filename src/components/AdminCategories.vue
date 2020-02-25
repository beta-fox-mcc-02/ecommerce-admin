<template>
  <div class="admin-category-container" justify="center" align="center">
      <h1>
        Categories
      </h1>
      <v-row>
        <v-col
          v-for="{id, name, bg_img} in categories"
          :key="id"
          cols="12"
          sm="12"
          md="6"
          lg="3"
        >
          <v-card>
            <v-img
              class="black--text align-end"
              height="200px"
              :src="bg_img"
            >
              <v-card-title>{{ name }}</v-card-title>
            </v-img>
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
