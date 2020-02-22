<template>
<v-card
    class="mx-auto"
    max-width="344"
    outlined
>
    <v-card-title>
        <h3 class="text-center"> Add </h3>
    </v-card-title>
  <form>
    <v-text-field
      v-model="name"
      label="name"
    >
    </v-text-field>
    <v-text-field
      v-model="description"
      label="description"
    >
    </v-text-field>
    <v-text-field
      v-model="price"
      label="price"
    >
    </v-text-field>
    <v-text-field
      v-model="stok"
      label="stok"
    >
    </v-text-field>
    <v-text-field
      v-model="image_url"
      label="image_url"
    >
    </v-text-field>
    <v-btn class="mr-4" @click="create">submit</v-btn>
  </form>
</v-card>

</template>

<script>
import axios from 'axios'

export default {
  data: () => {
    return {
      name: '',
      description: '',
      price: null,
      stok: null,
      image_url: ''
    }
  },
  methods: {
    create () {
      axios({
        url: 'http://localhost:3000/create',
        method: 'post',
        data: {
          name: this.name,
          description: this.description,
          price: +this.price,
          stock: +this.stok,
          image_url: this.image_url
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(data => {
          this.$router.push('/')
        })
        .catch(err => {
          this.$store.commit('err', err)
        })
    }
  }
}
</script>

<style>

</style>
