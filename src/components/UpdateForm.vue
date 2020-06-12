<template>
  <div>
    <div class="container alert alert-warning" role="alert" v-if="error">{{error}}</div>
    <form method="post" @submit.prevent="updateProduct">
      <input type="text" name="name" v-model="name" /> <br />
      <input type="text" name="image_url" v-model="image_url" /> <br />
      <input type="text" name="price" v-model="price" /> <br />
      <input type="text" name="stocks" v-model="stocks" /> <br />
      <input type="submit" value="Update" />
    </form>
    <button>
      <router-link to="/product/list">Back to product list</router-link>
    </button>
    <b-spinner label="Spinning" v-if="loading"></b-spinner>
  </div>
</template>

<script>
export default {
  name: "UpdateForm",
  data() {
    return {
      id: "",
      name: "",
      image_url: "",
      price: "",
      stocks: "",
      loading: false,
      error: ''
    };
  },
  methods: {
    updateProduct() {
      let id = this.id;
      this.loading = true;
      axios({
        method: "put",
        url: `https://tranquil-coast-06554.herokuapp.com/admin/product/${id}/update`,
        data: {
          name: this.name,
          image_url: this.image_url,
          price: this.price,
          stocks: this.stocks
        }
      })
        .then(data => {
          this.page = "list";
          this.loading = false
          this.fetchAll();
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
  }
};
</script>

<style></style>
