<template>
  <div id="edit-product-form">
    <i class="far fa-window-close" v-on:click="close" style="float: right; font-size: 15pt; cursor: pointer"></i>
    <form v-on:submit.prevent="editProduct">
      <div class="add-input">
        <input type="text" v-model="name" placeholder="product name...">
        <i v-if="unfilledField" class="fas fa-exclamation-circle"></i>
      </div>
      <div class="add-input">
        <input type="number" v-model="price">
        <i v-if="unfilledField" class="fas fa-exclamation-circle"></i>
      </div>
      <div class="add-input">
        <input type="number" v-model="stock">
        <i v-if="unfilledField" class="fas fa-exclamation-circle"></i>
      </div>
      <div class="add-input">
        <input type="url" v-model="imageUrl" placeholder="product url...">
      </div>
      <div class="add-input">
        <select v-model="allCategory">
          <option v-for="category in allCategory" v-bind:key="category.id"> {{ category.name }} </option>
        </select>
        <i v-if="unfilledField" class="fas fa-exclamation-circle"></i>
      </div>
      <button type="submit">EDIT</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      unfilledField: false
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
    close () { this.$emit('closeForm', false) },
    editProduct () {
      this.$store.dispatch('updateProductAsync')
        .then((result) => {
          if (!result) this.unfilledField = true
          else this.close()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

div#edit-product-form {
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
