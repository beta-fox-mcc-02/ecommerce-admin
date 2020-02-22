<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Description</th>
          <th class="text-left">price</th>
          <th class="text-left">stock</th>
          <th class="text-left">image_url</th>
          <th class="text-center">AddProduct</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in item" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.stock }}</td>
          <td>{{ item.image_url }}</td>
          <td>
              <div class="text-center">
                <v-btn depressed small color="primary" @click.prevent="add">Add</v-btn>
              </div>
          </td>
          <td>
            <div class="text-center">
                <v-btn depressed small color="primary" @click="edit(item.id, item.name, item.description, item.price, item.stock, item.image_url)">edit</v-btn>
                <v-btn depressed small color="error" @click.prevent="deleted(item.id)">delete</v-btn>
            </div>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import axios from 'axios'

export default {
  data: () => {
    return {
      item: []
    }
  },
  methods: {
    fecth () {
      axios({
        url: 'http://localhost:3000/',
        method: 'get',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(data => {
          this.item = data.data
        })
        .catch(err => {
          this.$store.commit('err', err)
        })
    },
    deleted (id) {
      console.log(id)
      axios({
        url: 'http://localhost:3000/' + id,
        method: 'delete',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(data => {
          this.fecth()
        })
        .catch(err => {
          this.$store.commit('err', err)
        })
    },
    edit (id, name, Description, price, stock, imageurl) {
      const data = [id, name, Description, stock, price, imageurl]
      this.$store.commit('edit', data)
      this.$router.push('/edit')
    },
    add () {
      this.$router.push('/add')
    }

  },
  created () {
    if (localStorage.token) {
      this.fecth()
    }
  }
}
</script>

<style>

</style>
