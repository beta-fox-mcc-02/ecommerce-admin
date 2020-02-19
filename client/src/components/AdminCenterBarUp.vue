<template>
  <div class="center-bar-up">
    <a v-b-modal.modal-center>
      <i class="fas fa-plus-circle" id="icon">ADD PRODUCTS</i>
    </a>
    <b-modal id="modal-center" centered title="Add Products">
      <!-- <p class="my-4">Vertically centered modal!</p> -->
      <!-- <form>
        <label>Prdouct Name</label><br>
        <input type="text" required v-model="name">
      </form> -->
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'AdminCenterBarUp'
}
</script>

<style>
#icon {
  color: green;
  font-size: 25px;
  cursor: pointer;
}
</style>
