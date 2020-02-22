<template>
  <div>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addProduct">
  Add Product
</button>

<!-- Modal -->
<div class="modal fade" id="addProduct" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <form>
  <div class="form-group" >
    <label for="exampleInputEmail1">Name</label>
    <input  class="form-control" aria-describedby="emailHelp" v-model="name">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">price</label>
    <input type="Number" class="form-control" aria-describedby="emailHelp" v-model="price">
    <small>input number only!</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">stock</label>
    <input type="Number" class="form-control" aria-describedby="emailHelp" v-model="stock">
    <small>input number only!</small>
  </div>
  <div class="form-group">
    <select v-model="categoryId" name="category">
  <option value="1">jerseys</option>
  <option value="2">gloves</option>
  <option value="3">boots</option>
  </select>

  </div>
   <div class="custom-file" >
      <input type="file" class="custom-file-input" id="customFile"  @change="fileChange"/>
      <label class="custom-file-label" for="customFile">{{imgName}}</label>
    </div>
    
  <button type="submit" class="btn btn-primary mt-4" @click.prevent="addProduct" data-dismiss="modal">Submit</button>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<script>
name: 'addProduct'
import axios from '../api/axiosInstance'
export default {
  data(){
    return{
      name: '',
      price: 1000,
      stock: 1,
      categoryId: 1,
      image: '',
      imgName:''
    }
  },
  methods:{
    fileChange(){
      this.imgName = event.target.files[0].name
      this.image = event.target.files[0]
    },
    addProduct(){
      console.log('ini add product');
      
      let formData = new FormData();
      formData.append("image", this.image);
      formData.append("name", this.name);
      formData.append("desc", this.desc);
      formData.append("price", this.price);
      formData.append("stock", this.stock);
      formData.append("CategoryId", this.categoryId);
      console.log(">> formData >> ", formData);

      axios({
        method: 'post',
        url: 'product/',
        data: formData
      })
       .then(({ data }) => {
            this.name = ''
            this.image = ''
            this.stock = 1
            this.price=1000
            this.imgName='Choose file'
            console.log(data, 'product added');
            this.$store.dispatch('fetchProducts')
            // this.$router.push('adminPage')

        })
        .catch(err => {
            
            console.log(err)

        })
    }
  },
  
}
</script>

<style>

</style>
