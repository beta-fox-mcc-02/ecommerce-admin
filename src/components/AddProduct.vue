<template>
  <div>
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
    </b-button>
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
      stocks: ""
    };
  },
  methods: {
    addProduct() {
      axios({
        method: "post",
        url: "http://localhost:3000/admin/product/create",
        data: {
          name: this.name,
          image_url: this.image_url,
          price: this.price,
          stocks: this.stocks
        }
      })
        .then(data => {
          this.$router.push("list");
        })
        .catch(err => {
          console.log(err);
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
