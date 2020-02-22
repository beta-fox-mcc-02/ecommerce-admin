<template>
    <tr>
      <th scope="row">{{item.id}}</th>
      <td>{{item.name}}</td>
      <td>{{item.price}}</td>
      <td>{{item.stock}}</td>
    </tr>
</template>

<script>
export default {
  name: 'Item',
  props: [
    'item'
  ]
}
</script>

<style>

</style>
