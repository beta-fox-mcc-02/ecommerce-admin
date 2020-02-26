<template>
<div class="product-form">
  <div class="card shadow">
    <div class="card-header py-3">
      <p class="text-primary m-0 font-weight-bold">Edit Product</p>
    </div>
    <div class="card-body">
      <form @submit.prevent="editProduct">
        <div class="row">
          <div class="col-6">
            <!--  -->
            <div class="form-row">
              <div class="col-2">
              </div>
              <div class="col-8">
                <label><strong>Change Image</strong></label>
                <img
                  :src="image_url"
                  alt="" class="img-thumbnail img-fluid mw-100 rounded h-10">
                <div class="form-group"><label for="address"><strong>Image
                      URL</strong></label><input type="text" class="form-control" name="name"
                    v-model="image_url" /></div>
              </div>
              <div class="col-2">
              </div>
            </div>
            <!--  -->
          </div>
          <div class="col-6">
            <div class="form-group"><label for="address"><strong>Name</strong></label><input
                type="text" class="form-control" name="name" v-model="name" /></div>
            <div class="form-group">
              <div class="form-row">
              </div>
              <div class="col">
                <div class="form-group"><label for="city"><strong>Price</strong><br /></label><input
                    type="number" min="0" step="any" class="form-control" name="price"
                    v-model="price" /></div>
              </div>
              <div class="col">
                <div class="form-group"><label for="stock"><strong>Stock</strong></label><input
                    type="number" min="0" step="any" class="form-control" name="stock"
                    v-model="stock" /></div>
              </div>
            </div>
            <div class="form-group"><button class="btn btn-primary" type="submit"
                @click="editProduct">Edit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      id: this.item.id,
      name: this.item.name,
      price: this.item.price,
      stock: this.item.stock,
      image_url: this.item.image_url,
    };
  },
  props: ['item'],
  methods: {
    editProduct() {
      const payload = {
        id: this.id,
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.image_url,
      };
      this.$store.dispatch('editProduct', payload)
        .then((result) => {
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    uploadToImgur() {
      const data = new FormData();
      data.append('name', 'my-file');
      data.append('file', this.$refs.image.files['0']);
      console.log(data);

      axios({
        method: 'POST',
        url: 'https://api.imgur.com/3/upload',
        data: {
          image: this.$refs.image.files['0'],
        },
        // datatype: 'json',
        headers: {
          // eslint-disable-next-line no-useless-concat
          authorization: 'Client-ID 4e45322b5570946',
        },
      })
        .then((response) => {
          this.image_url = response.data.link;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    // console.log(this.$route);
    // console.log(this.item);
  },
};
</script>

<style scoped>
.product-form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  min-width: 80% !important;
}
</style>
