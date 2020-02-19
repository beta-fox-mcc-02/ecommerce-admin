<template>
  <div class="col-3 mb-3">
    <div class="card text-center">
      <img src="${el.imageUrl}" />
      <div class="card-body">
        <h5 class="card-title">
          <span id="title-${el.id}">${el.title}</span>
        </h5>
        <p class="card-text">
          Author:
          <span id="author-${el.id}">${el.author}</span>
        </p>
        <button class="btn btn-primary" id="b-${el.id}">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style>
</style>
