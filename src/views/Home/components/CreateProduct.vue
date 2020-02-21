<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group id="input-group-1" label="Product name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="name"
          type="text"
          required
          placeholder="Enter product name"
        ></b-form-input>
      </b-form-group>

      <b-form-file v-model="file" class="my-3" plain required></b-form-file>

      <b-form-group id="input-group-3" label="Price:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="price"
          type="number"
          required
          placeholder="Enter product price"
          min="1"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Stock:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="stock"
          type="number"
          required
          placeholder="Enter product stock"
          min="1"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="dark">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'CreateProduct',
  data() {
    return {
      name: 'asda',
      file: null,
      price: '20',
      stock: '20'

    };
  },
  methods: {
    onSubmit() {
      const payload = {
        name: this.name,
        image_url: 'http://google.com',
        price: this.price,
        stock: this.stock
      };
      this.$store.dispatch('createProduct', payload)
        .then(() => {
          this.$emit('closeModal');
          this.$store.commit('SET_ERROR_STATUS', false);
          return this.$store.dispatch('fetchProduct');
        })
        .then(({ data }) => {
          this.$store.commit('SET_LOADING', false);
          this.$store.commit('SET_ERROR_STATUS', false);
          this.$store.commit('SET_ITEMS', data.data);
        })
        .catch(({ response }) => {
          this.$store.commit('SET_LOADING', false);
          this.$store.commit('SET_ERROR_MESSAGE', response.data.message);
          if (response.status === 401) {
            this.$router.push('/');
            this.$store.commit('LOGOUT');
            localStorage.removeItem("access_token");
          }
          // console.log(response);
        });
    },

  }
}
</script>
