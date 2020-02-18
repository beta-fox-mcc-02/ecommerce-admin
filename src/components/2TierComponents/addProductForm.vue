<template>
  <div id="add-product-form">
    <i class="far fa-window-close" v-on:click="close" style="float: right; font-size: 15pt; cursor: pointer"></i>
    <form v-on:submit.prevent="addProduct">
      <div class="add-input">
        <input type="text" v-model="name" placeholder="product name...">
        <i v-if="unfilledField" class="fas fa-exclamation-circle"></i>
      </div>
      <div class="add-input">
        <input type="number" v-model="price" placeholder="product price...">
        <i v-if="unfilledField" class="fas fa-exclamation-circle"></i>
      </div>
      <div class="add-input">
        <input type="number" v-model="stock" placeholder="product quantity...">
        <i v-if="unfilledField" class="fas fa-exclamation-circle"></i>
      </div>
      <div class="add-input">
        <select v-model="chosenCategory">
          <option v-for="category in categories" v-bind:key="category.id" selected> {{ category.name }} </option>
        </select>
        <i v-if="unfilledField" class="fas fa-exclamation-circle"></i>
      </div>
      <button type="submit">ADD</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      price: 0,
      stock: 0,
      chosenCategory: '',
      unfilledField: false
    }
  },
  props: {
    categories: Array
  },
  methods: {
    close () { this.$emit('closeForm', false) },
    addProduct () {
      if (this.name && this.price && this.stock && this.chosenCategory) {
        this.$emit('addProduct', {
          name: this.name,
          price: this.price,
          stock: this.stock,
          category: this.chosenCategory
        })
      } else {
        this.clearInputs()
        this.unfilledField = true
      }
    },
    clearInputs () {
      this.name = ''
      this.price = 0
      this.stock = 0
    }
  }
}
</script>

<style scoped>

div#add-product-form {
  position: absolute;
  width: 20rem;
  background-color: #189a184d;
}

form {
  margin: 1rem auto;
  width: 75%;
}

.add-input {
  padding: 0.5rem;
  background-color: white;
  margin: 0.2rem 0;
}

input, select {
  width: 80%;
  border-style: none;
  margin-left: 0.5rem;
  outline: 0;
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
