<template>
<v-card
    class="mx-auto"
    max-width="344"
    outlined
>
    <v-card-title>
        <h3 class="text-center"> Edit</h3>
    </v-card-title>
  <form>
    <v-text-field
      v-model="name"
      label="name"
    >
    </v-text-field>
    <v-text-field
      v-model="description"
      value="editData.Description"
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
    <v-btn class="mr-4" @click.prevent="update">submit</v-btn>
  </form>
  <h1>{{ editData[0] }}</h1>
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
    update () {
      axios({
        url: 'http://localhost:3000/' + this.editData[0],
        method: 'put',
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
          console.log(err)
        })
    }
  },
  computed: {
    editData () {
      return this.$store.state.data
    }
  },
  created () {
    console.log(this.editData, 'ini isi')
    console.log(this.$store.state.data, 'ini dari state ')
  }
}
</script>

<style>

</style>
