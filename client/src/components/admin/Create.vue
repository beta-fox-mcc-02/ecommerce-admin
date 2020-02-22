<template>
  <b-dropdown position="is-bottom-left" aria-role="menu" trap-focus>
    <button
      class="button field is-success"
      slot="trigger"
      role="button"
      style="margin: 15px 7px 0 0;"
    >
      <b-icon icon="plus-circle"></b-icon>
      <span>Add Product</span>
    </button>
    <b-dropdown-item aria-role="menu-item" :focusable="false" custom paddingless>
      <form method="post" @submit.prevent="createProduct">
        <div class="modal-card" style="width:300px;">
          <section class="modal-card-body">
            <b-field label="Name">
              <b-input type="text" placeholder="Product Name" required v-model="name"></b-input>
            </b-field>
            <b-field label="Author">
              <b-input type="text" placeholder="Product Author" required v-model="author"></b-input>
            </b-field>
            <b-field label="Image Url">
              <b-input type="url" placeholder="Image Url" required v-model="image_url"></b-input>
            </b-field>
            <b-field label="Price">
              <b-input type="number" placeholder="Product Price" min="1" required v-model="price"></b-input>
            </b-field>
            <b-field label="Stock">
              <b-input type="number" placeholder="Product Stock" min="1" required v-model="stock"></b-input>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success" router>Create</button>
          </footer>
        </div>
      </form>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  name: 'Create',
  data () {
    return {
      name: '',
      author: '',
      image_url: '',
      price: 0,
      stock: 0
    }
  },
  methods: {
    createProduct () {
      const payload = {
        name: this.name,
        author: this.author,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('fetchCreate', payload)
    }
  }
}
</script>

<style>
</style>
