<template>
  <div id="edit-product-form" v-on:click="setOffNotif">
    <div id="edit-header">
      <i class="far fa-window-close" v-on:click="close" style="float: right; font-size: 15pt; cursor: pointer"></i>
    </div>
    <div id="edit-form">
      <form v-on:submit.prevent="editProduct">
        <div class="add-input">
          <div class="input-label">
            <label>Product name</label>
            <input type="text" v-model="name">
          </div>
          <i v-if="unfilledField" class="fas fa-exclamation-circle"></i>
        </div>
        <div class="add-input">
          <div class="input-label">
            <label>Product Price</label>
            <input type="number" v-model="price">
          </div>
          <i v-if="unfilledField" class="fas fa-exclamation-circle"></i>
        </div>
        <div class="add-input">
          <div class="input-label">
            <label>Product Stock</label>
            <input type="number" v-model="stock">
          </div>
          <i v-if="unfilledField" class="fas fa-exclamation-circle"></i>
        </div>
        <div class="add-input">
          <div class="input-label">
            <label>Product Url / Directory</label>
            <input type="url" v-model="imageUrl" placeholder="product url...">
          </div>
        </div>
        <div class="add-input">
          <div class="input-label">
            <label>Product Category</label>
            <select v-model="allCategory">
              <option v-for="category in allCategory" v-bind:key="category.id"> {{ category.name }} </option>
            </select>
          </div>
          <i v-if="unfilledField" class="fas fa-exclamation-circle"></i>
        </div>
        <button type="submit">EDIT</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      unfilledField: false,
      message: ''
    }
  },
  props: {
    categories: Array
  },
  computed: {
    name: {
      get () { return this.$store.state.name },
      set (value) { this.$store.commit('setName', value) }
    },
    price: {
      get () { return this.$store.state.price },
      set (value) { this.$store.commit('setPrice', value) }
    },
    stock: {
      get () { return this.$store.state.stock },
      set (value) { this.$store.commit('setStock', value) }
    },
    imageUrl: {
      get () { return this.$store.state.imageUrl },
      set (value) { this.$store.commit('setImageUrl', value) }
    },
    allCategory: {
      get () { return this.$store.state.categories },
      set (value) { this.$store.commit('setCategory', value) }
    }
  },
  methods: {
    close () {
      this.$store.commit('unsetAll')
      this.$emit('closeForm', false)
    },
    editProduct () {
      this.$store.dispatch('updateProductAsync')
        .then((result) => {
          if (!result) this.unfilledField = true
          else if (result) this.close()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setOffNotif () {
      this.unfilledField = false
      this.message = ''
    }
  }
}
</script>

<style scoped>

div#edit-product-form {
    position: absolute;
    width: 20rem;
    background-color: #d7f6f7;
    right: 0.9rem;
    top: 20rem;
    height: 19rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

div#edit-form {
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
}

form {
  width: 75%;
}

.add-input {
    background-color: white;
    margin: 0.2rem 0;
    padding-bottom: 0.2rem;
    display: flex;
    align-items: center;
}

.input-label {
    width: 85%;
}

label {
    margin-left: 0.5rem;
    font-variant-caps: all-petite-caps;
    color: #a5a5a5;
}

input, select {
    width: 90%;
    border-style: none;
    font-size: 12pt;
    margin-left: 0.5rem;
    outline: 0;
    padding-bottom: 0.5rem;
}

i.fas.fa-exclamation-circle {
  color: red;
  animation: bounce-in 1s infinite;
}

@keyframes bounce-in {
  0%{
    opacity: 0;
    transform: scale(0);
  }
  50%{
    opacity: 1;
    transform: scale(1.5);
  }
  100%{
    opacity: 0.5;
    transform: scale(1);
  }
}

</style>
