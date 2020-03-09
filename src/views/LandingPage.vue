<template>
  <div class="d-flex">
    <div class="dashBoard" v-if="addingProduct === false">

      <div class="col">
          <ChartSelling></ChartSelling>
        <div class="row">

          <div class="col p-2 ">

          <div class="social-box">
              <div class="container">
                <div class="row">

                    <div class="col-lg-4 col-xs-12 text-center">
                    <div class="box">
                      <i class="fas fa-plus-square fa-5x"></i>
                      <div class="box-title m-3">
                        <h3>Add Product</h3>
                      </div>
                      <div class="box-text">
                        <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                      </div>
                      <div class="box-btn">
                          <a @click="addProduct">Start to add</a>
                      </div>
                    </div>
                  </div>
              </div>
              </div>
          </div>
            <!-- <div class="">
              <h1 class="display-5" >Add new product</h1>
              <p></p>
              <a @click="addProduct" class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div> -->
          </div>
        </div>
          <div class="social-box">
              <div class="container">
                <div class="row">

                    <div class="col-lg-4 col-xs-12 text-center">
                    <div class="box">
                      <i class="fas fa-table fa-5x"></i>
                      <div class="box-title m-3">
                        <h3>Products</h3>
                      </div>
                      <div class="box-text">
                        <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                      </div>
                      <div class="box-btn">
                          <a  @click="products" >Learn More</a>
                      </div>
                    </div>
                  </div>
              </div>
              </div>
          </div>
          <!-- <h3>Last Product Added</h3>
          <button @click="products" type="button" class="btn btn-link">See more products</button>
        <div class="row justify-content-center">
          <LastItemAdded></LastItemAdded>
        </div> -->
      </div>
    </div>
    <AddProduct v-if="addingProduct === true"></AddProduct>
  </div>
</template>

<script>

import ChartSelling from '../components/ChartSelling.vue'
// import LastItemAdded from '../components/LastItemAdded.vue'
import AddProduct from '../components/AddProduct.vue'

export default {
  name: 'LandingPage',
  components: {
    ChartSelling,
    // LastItemAdded,
    AddProduct
  },
  methods: {
    addProduct () {
      // console.log('bisa nih addnyaaaaaaa====================')
      this.$store.commit('ADD_PRODUCT', true)
    },
    products () {
      this.$router.push('/products')
    }
  },
  computed: {
    addingProduct () {
      return this.$store.state.addProduct
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$router.push('/')
    } else {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.home{
  width: 100%;
  height: 500px;
  background-color: blue;
}

@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

body{
    background: #f2f2f2;
    font-family: 'Poppins', sans-serif;
}

h3{
    font-family: 'Poppins', sans-serif;
}

.social-box .box{
    background: #FFF;
    border-radius: 10px;
    padding: 40px 10px;
    margin: 20px 0px;
    cursor: pointer;
    transition: all 0.5s ease-out;
}

.social-box .box:hover{
   box-shadow: 0 0 6px #4183D7;
}

.social-box .box .box-text{
    margin:20px 0px;
    font-size: 15px;
    line-height: 30px;
}

.social-box .box .box-btn a{
    text-decoration: none;
    color: #4183D7;
    font-size: 16px;
}

.fa{
     color:#4183D7;
}
</style>
