<template>
    <div style="width: 80vw; display: flex; justify-content: center;">
      {{product}}
      <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input id="name" type="text" class="validate">
          <label for="name">Product Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea id="description" class="materialize-textarea"></textarea>
          <label for="description">Product Description</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s4">
          <select class="browser-default">
            <option value="" disabled selected>Category</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
        <div class="input-field col s4">
          <input id="price" type="number" class="validate" min="0">
          <label for="price">Price</label>
        </div>
        <div class="input-field col s4">
          <input id="stock" type="number" class="validate" min="0">
          <label for="stock">Stock</label>
        </div>
      </div>
      <div class="file-field input-field">
        <div class="btn">
          <span>Image</span>
          <input type="file">
        </div>
        <div class="file-path-wrapper">
          <input class="file-path validate" type="text">
        </div>
      </div>
      <div style="margin-top: 2rem;">
        <button style="margin-right: 2rem;" class="btn waves-effect waves-light" type="submit" name="action">Submit
          <i class="material-icons right">send</i>
        </button>
        <button class="btn waves-effect waves-light" type="submit" name="action" @click.prevent="backToProduct">Cancel
          <i class="material-icons right">cancel</i>
        </button>
      </div>
    </form>
    </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  methods: {
    backToProduct () {
      this.$router.push('/product')
    }
  },
  created () {
    console.log(this.$route.query)
  }
}
</script>

<style>

</style>
