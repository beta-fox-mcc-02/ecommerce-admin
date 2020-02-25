<template>
  <div id="add-product-form" v-on:click="setOffNotif">
    <div id="close-btn">
      <i class="far fa-window-close" v-on:click="close" style="float: right; font-size: 15pt; cursor: pointer"></i>
    </div>
    <div id="fail-notif">
      {{message}}
    </div>
    <div id="add-form-container">
      <form v-on:submit.prevent="addProduct">
        <div class="add-input">
          <div class="input-label">
            <label>Product Name</label>
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
            <input type="url" v-model="imageUrl">
          </div>
        </div>
        <div class="add-input">
          <div class="input-label">
            <label>Product Category</label>
            <select v-model="category">
              <option v-for="category in categories" v-bind:key="category.id"> {{ category.name }} </option>
            </select>
          </div>
          <i v-if="unfilledField" class="fas fa-exclamation-circle"></i>
        </div>
        <button type="submit">ADD</button>
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
  computed: {
    categories () {
      return this.$store.state.categories
    },
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
    category: {
      get () { return this.$store.state.category },
      set (value) { this.$store.commit('setCategory', value) }
    }
  },
  methods: {
    close () {
      this.$store.commit('unsetAll')
      this.$emit('closeForm', false)
    },
    addProduct () {
      this.$store.dispatch('createProductAsync')
        .then((result) => {
          if (result) this.close()
          else if (!result) this.unfilledField = true
        })
        .catch(() => {
          this.$store.commit('unsetAll')
          this.message = 'There was someting error with your inputs'
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

div#add-product-form {
    position: absolute;
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 25rem;
    background-color: #d7f6f7;
    box-shadow: 0.1rem 0.1rem 0.5rem grey;
}

div#add-form-container {
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
}

form {
    width: 80%;
    height: 100%;
}

.add-input {
    display: flex;
    align-items: center;
    background-color: white;
    margin: 0.2rem 0;
}

div#fail-notif {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
    width: inherit;
    font-weight: bold;
    animation: reddish 2s infinite;
}

label {
    margin-left: 0.5rem;
    font-variant-caps: all-petite-caps;
    color: #a5a5a5;
}

.input-label {
    width: 85%;
}

input, select {
    width: 80%;
    border-style: none;
    margin-left: 0.5rem;
    outline: 0;
    font-size: 15pt;
    margin-bottom: 0.5rem;
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

@keyframes reddish {
  0%{
    opacity: 0.5;
    color: rgb(179, 19, 19);
    transform: scale(1)
  }
  50%{
    opacity: 1;
    color: rgb(255, 8, 8);
    transform: scale(0.9)
  }
  100%{
    opacity: 0.5;
    color: rgb(179, 19, 19);
    transform: scale(1)
  }
}

</style>
