<template>
  <b-dropdown position="is-bottom-left" aria-role="menu" trap-focus>
    <button
      class="button field is-info"
      slot="trigger"
      role="button"
    >
      <b-icon icon="pencil-circle"></b-icon>
      <span>Edit Product</span>
    </button>
    <b-dropdown-item aria-role="menu-item" :focusable="false" custom paddingless>
      <form method="post" @submit.prevent="editProduct">
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
            <button class="button is-success" router>Edit</button>
          </footer>
        </div>
      </form>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      name: '',
      author: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  props: {
    payload: Object
  },
  methods: {
    editProduct () {
      const payload = {
        id: this.id,
        name: this.name,
        author: this.author,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('fetchEdit', payload)
        .then(({ data }) => {
          this.$store.dispatch('fetchProduct')
          this.$buefy.toast.open({
            duration: 5000,
            message: data.message,
            position: 'is-top',
            type: 'is-success'
          })
          this.$router.push({ path: '/admin' })
        })
        .catch(err => {
          this.$buefy.toast.open({
            duration: 10000,
            message: err.response.data.message,
            position: 'is-top',
            type: 'is-danger'
          })
        })
      this.id = ''
      this.name = ''
      this.author = ''
      this.image_url = ''
      this.price = ''
      this.stock = ''
    },
    documentReady () {
      console.log(this.payload, 'document ready')
      this.id = this.payload.id
      this.name = this.payload.name
      this.author = this.payload.author
      this.image_url = this.payload.image_url
      this.price = this.payload.price
      this.stock = this.payload.stock
    }
  },
  created () {
    this.documentReady()
  }
}
</script>

<style>

</style>
