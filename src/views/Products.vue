<template>
<div>
  <h1>List All Product</h1>
    <div class="d-flex p-3 flex-wrap">
      <div class="card m-3" style="width: 18rem;">
        <img src="https://ibox.co.id/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-11-pro-max-midnight-green_3.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <div class="d-flex justify-content-center m-4">
            <button @click="edit" type="button" class="btn btn-success">Edit</button>
            <button @click="remove" type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Products',
  method: {
    edit () {

    }
  }
}
</script>

<style>

</style>
