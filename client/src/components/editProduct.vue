<template>
  <div>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-warning" data-toggle="modal" :data-target="'#modal' + prod.id">
  Edit
</button>

<!-- Modal -->
<div class="modal fade" :id="'modal' + prod.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">edit product </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <form>
  <div class="form-group" >
    <label for="exampleInputEmail1">Name</label>
    <input  class="form-control" aria-describedby="emailHelp" v-model="prod.name">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">price</label>
    <input type="Number" class="form-control" aria-describedby="emailHelp" v-model="prod.price">
    <small>input number only!</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">stock</label>
    <input type="Number" class="form-control" aria-describedby="emailHelp" v-model="prod.stock">
    <small>input number only!</small>
  </div>
  <div class="form-group">
    <select v-model="prod.CategoryId" name="category">
  <option value="1">jerseys</option>
  <option value="2">gloves</option>
  <option value="3">boots</option>
  </select>

  </div>
   <div class="custom-file" >
      <input typeaddProduct="file" class="custom-file-input" id="customFile"  @change="fileChange"/>
      <label class="custom-file-label" for="customFile">{{prod.image_url}}</label>
    </div>
    
  <button type="submit" class="btn btn-primary mt-4" @click.prevent="editProduct(prod.id)" data-dismiss="modal">Submit</button>
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
name: 'editProduct'
import axios from '../api/axiosInstance'
export default {
  data(){
    return{
      editName: '',
      editPrice: 1000,
      editStock: 1,
      editCategoryId: 1,
      editImage: '',
      imgName:''
    }
  },
  props:{
    prod: Object
  },
  methods:{
    fileChange(){
      this.imgName = event.target.files[0].name
      this.editImage = event.target.files[0]
    },
    editProduct(id){
      console.log('ini add product');
      
      let formData = new FormData();
      formData.append("image", this.prod.image_url);
      formData.append("name", this.prod.name);
      formData.append("desc", this.prod.desc);
      formData.append("price", this.prod.price);
      formData.append("stock", this.prod.stock);
      formData.append("CategoryId", this.prod.CategoryId);
      console.log(">> formData >> ", formData);

      axios({
        method: 'put',
        url: `/product/${id}`,
        data: formData,
        headers:{
          token: localStorage.token
        }
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
