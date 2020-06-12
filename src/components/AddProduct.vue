<template>
  <div>
    <div class="container alert alert-warning" role="alert" v-if="error">{{error}}</div>
    <b-form method="post" @submit.prevent="addProduct">
      <b-input
        type="text"
        name="name"
        v-model="name"
        placeholder="product name...."
        required
      />
      <br />
      <b-input
        type="text"
        name="image_url"
        v-model="image_url"
        placeholder="url image of product..."
        required
      />
      <br />
      <b-input
        type="number"
        name="price"
        v-model="price"
        placeholder="price...."
        required
      />
      <br />
      <b-input
        type="number"
        name="stocks"
        v-model="stocks"
        placeholder="stocks...."
        required
      /><br />
      <b-button variant="success" type="submit">
        Add
      </b-button>
    </b-form>
    <b-button variant="primary">
      <router-link to="/product/list" class=white>Back to product list</router-link>
    </b-button> <br>
    <b-spinner label="Spinning" v-if="loading"></b-spinner>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddProduct",
  data() {
    return {
      name: "",
      image_url: "",
      price: "",
      stocks: "",
      error: "",
      loading: false
    };
  },
  methods: {
    addProduct() {
      this.loading = true;
      axios({
        method: "post",
        url: "https://tranquil-coast-06554.herokuapp.com/admin/product/create",
        data: {
          name: this.name,
          image_url: this.image_url,
          price: this.price,
          stocks: this.stocks
        }
      })
        .then(data => {
          this.loading = false;
          this.$router.push("list");
        })
        .catch(err => {
          if (err.response.data.msg) {
            this.error = err.response.data.msg
          } else if (err.response.data.msg) {
            this.error = err.response.data.msg[0]
          }
          this.loading = false
        });
    }
  },
  created() {
    if (localStorage.access_token) {
      this.$router.push('/product/add')
    } else {
      this.$router.push("/login");
    }
  }
};
</script>

<style>
  a {
    text-decoration: none;
  }
  .white {
    color: white;
  }
</style>
