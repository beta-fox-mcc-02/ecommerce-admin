<template>
   <div class="product">
    <h1>Add Product Form</h1> <br>
    <form @submit.prevent="addProduct">
      <label>Name</label>
      <input
        v-model="name"
        type="text"
        required
        class="addProduct"
        placeholder="Input component name..."
      >

      <label>Image URL</label>
      <input
        v-model="imageUrl"
        type="text"
        required
        class="addProduct"
        placeholder="Input the image url..."
      >

      <label>Price</label>
      <input
        v-model="price"
        type="number"
        required
        class="addProduct"
        placeholder="Input the price..."
      >

      <label>Stock</label>
      <input
        v-model="stock"
        type="number"
        required
        class="addProduct"
        placeholder="Input the stock..."
      >

      <label>Category</label>
      <select v-model="selected">
        <option disabled value="">Please select one</option>

      </select>

      <input
        type="submit"
        id="login-button"
        class="btn_login"
        value="LOGIN"
      ><br>

      <center><label>No account?</label>
      <a href="#"
        @click="register"
      >Register Here</a></center>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>