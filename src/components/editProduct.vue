<template>
  <div>
    <a data-toggle="modal" :data-target="'#edit'+id" class="btn btn-success">Edit</a>
    <a data-toggle="modal" :data-target="'#del'+id" class="btn btn-success">Delete</a>
    <div class="modal fade" :id="'del'+id" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <p class="modal-title">Delete Gundam</p>
                </div>
                <div class="modal-body">
                    <p>Are you Sure?</p>
                </div>
                <div class="modal-footer">
                    <button @click="del" class="btn btn-danger">Yes</button>
                    <button data-dismiss="modal" class="btn btn-success">No</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" :id="'edit'+id" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <p class="modal-title">Edit Gundam</p>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="edit">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" v-model="name" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Image Url</label>
                            <input type="text" v-model="imageUrl" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Price</label>
                            <input type="number" v-model="price" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Stock</label>
                            <input type="number" v-model="stock" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-primary">Edit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- <b-button data-toggle="modal" :data-target="'add'+id" class="btn btn-success text-light">Edit Beneran</b-button>
    <b-modal :id="'add'+id" title="Edit Gundam">
        <b-form @submit.prevent="edit" class="text-center">
              <b-form-group id="input-group-1" label="Gundam Name:" label-for="input-1">
              <b-form-input
              id="input-1"
              v-model="name"
              type="text"
              required
              placeholder="Enter Gundam Name"
              ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-2" label="Image URL:" label-for="input-2">
              <b-form-input
              id="input-2"
              type='text'
              v-model="imageUrl"
              placeholder="Enter Gundam Image Url"
            ></b-form-input>
            </b-form-group>
              <b-form-group id="input-group-3" label="Price:" label-for="input-3">
              <b-form-input
              id="input-3"
              type='number'
              v-model="price"
              required
              placeholder="Enter Gundam Price"
            ></b-form-input>
            </b-form-group>
              <b-form-group id="input-group-4" label="Stock:" label-for="input-4">
              <b-form-input
              id="input-4"
              type='number'
              v-model="stock"
              required
              placeholder="Enter Gundam Stock"
            ></b-form-input>
            </b-form-group>
            <b-button class="btn-success" type="submit" variant="primary">Add Gundam</b-button>
        </b-form>
    </b-modal> -->
  </div>
</template>

<script>
export default {
//   name: 'NewGundam',
  data () {
    return {
      id: this.Id,
      name: this.Name,
      imageUrl: this.ImageUrl,
      price: this.Price,
      stock: this.Stock
    }
  },
  props: {
    Id: Number,
    Name: String,
    ImageUrl: String,
    Price: Number,
    Stock: Number
  },
  methods: {
    edit () {
      const updateGundam = {
        id: this.id,
        name: this.name,
        image_url: this.imageUrl,
        price: this.price,
        stock: this.stock
      }
      console.log(updateGundam)
      this.name = ''
      this.imageUrl = ''
      this.price = ''
      this.stock = ''
      this.$store.dispatch('editProduct', updateGundam)
    },
    del () {
      this.$store.dispatch('deleteProduct', this.id)
    }
  }
}
</script>

<style>

</style>
