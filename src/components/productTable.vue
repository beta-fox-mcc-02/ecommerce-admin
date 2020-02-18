<template>
  <tr>
    <td>{{product.name}}</td>
    <td>{{hundredCharString}}</td>
    <td>{{product.category}}</td>
    <td>{{getPrice}}</td>
    <td>{{product.stock}}</td>
    <td><img style="width: 8rem" :src=product.imageUrl></td>
    <td>
      <ul>
        <li style="color: green;"><i class="material-icons">edit</i></li>
        <li style="color: red;"><i class="material-icons">delete</i></li>
      </ul>
    </td>
  </tr>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    product: Object
  },
  created () {
  },
  computed: {
    hundredCharString () {
      const { description } = this.product
      let str = ''
      for (let i = 0; i < 100; i++) {
        str += description[i]
      }
      return `${str} ...`
    },
    getPrice () {
      const { price } = this.product
      return `Rp ${Number(price).toLocaleString('id-ID')}`
    }
  }
}
</script>

<style>

</style>
