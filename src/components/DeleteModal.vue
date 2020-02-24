<template>
    <div role="dialog" tabindex="-1" class="modal fade show" style="display: block;">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Delete Item</h4>
          </div>
          <div class="modal-body">
            <p>Are you sure to delete this item?</p>
          </div>
          <div class="modal-footer"><button class="btn btn-light" type="button"
              data-dismiss="modal" @click="exit">Cancel</button>
              <button class="btn btn-primary" type="button"
              style="background-color: rgb(231,74,59);" @click="deleteProduct">Delete</button></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DeleteModal',
  props: ['id'],
  methods: {
    deleteProduct() {
      this.$store.dispatch('deleteProduct', +this.id)
        .then(() => {
          console.log('success deleting product');
          this.$emit('closeModal', false);
          this.$emit('fetchProduct');
        })
        .catch((err) => {
          console.log(err.response);
          this.$emit('closeModal', false);
        });
    },
    exit() {
      this.$emit('closeModal', false);
    },
  },
};
</script>
