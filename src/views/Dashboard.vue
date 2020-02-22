<template>
  <div>
    <h1>Products</h1>
    <ModalProduct></ModalProduct>
    <TableProduct></TableProduct>
  </div>
</template>

<script>
import TableProduct from '../components/TableProduct'
import ModalProduct from '../components/ModalProduct'

export default {
  name: 'Dashboard',
  components: {
    TableProduct,
    ModalProduct
  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      modalShow: false
    }
  }

}
</script>

<style>
</style>
