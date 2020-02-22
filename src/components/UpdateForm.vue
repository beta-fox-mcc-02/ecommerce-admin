<template>
  <div>
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
      stocks: ""
    };
  },
  methods: {
    updateProduct() {
      let id = this.id;
      axios({
        method: "put",
        url: `http://localhost:3000/admin/product/${id}/update`,
        data: {
          name: this.name,
          image_url: this.image_url,
          price: this.price,
          stocks: this.stocks
        }
      })
        .then(data => {
          this.page = "list";
          this.fetchAll();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style></style>
