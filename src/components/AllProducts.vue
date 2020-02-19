<template>
  <div id="Allproducts">
    <div class="container my-5">
      <div class="row" style="display: flex; justify-content: space-around">
        <div class="content" v-for="product in allProducts" :key="product.id">
          <div class="card" style="width: 18rem; cursor: pointer" @click="getDetail(product.id)">
            <img
              id="image-card"
              class="align-self-center shadow my-3"
              :src="product.image_url"
              style="display: block;
            max-width:230px;
            min-height:300px;
            width: auto;
            height: auto"
            />
            <div class="card-body">
              <h5 class="card-title">{{product.name}}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Stock {{product.stock}}</h6>
              <p
                class="card-text text-right"
              ><strong>Rp. {{product.price}}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AllProduct",
  components: {
     
  },
  data() {
    return {};
  },
  methods: {
     getDetail(productId) {
        this.$router.push(`/admin/${productId}`)
     }
  },
  created() {
    this.$store.dispatch("getAllItem");
  },
  computed: {
    allProducts() {
      return this.$store.state.allProduct;
    }
  }
};
</script>

<style scoped>
.card {
  border: none;
  /* -webkit-box-shadow: 9px 10px 47px -13px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 9px 10px 47px -13px rgba(0, 0, 0, 0.41);
  box-shadow: 9px 10px 47px -13px rgba(0, 0, 0, 0.41); */
}

#image-card {
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222);
  transition: transform .5s;
  overflow: hidden;
}

#image-card:hover{
   transform: scale(1.2);
}
</style>
