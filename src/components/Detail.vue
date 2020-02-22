<template>
  <div class="detail-product">
    <div class="title">
        <h1>{{item.name}}</h1>
    </div>
    <div class="image">
      <img :src="item.image_url">
    </div>
    <div class="notif">

      <h4>Price : Rp. {{item.price.toLocaleString()}}</h4>
      <h4>Stock: {{item.stock}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailProduct',
  data () {
    return {
      item: {
        id: 0,
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    getDataProduct () {
      this.item.id = this.item2.id
      this.item.name = this.item2.name
      this.item.image_url = this.item2.image_url
      this.item.price = this.item2.price
      this.item.stock = this.item2.stock
    }
  },
  computed: {
    item2 () {
      return this.$store.state.item
    }
  },
  watch: {
    item2: function () {
      this.getDataProduct()
    }
  }
}
</script>

<style>
  .detail-product {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title, .image, .notif {
    margin: 20px;
  }
  img {
    width: 100px;
    height: 100px;
  }
</style>
