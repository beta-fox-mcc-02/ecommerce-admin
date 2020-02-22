<template>
  <tr>
    <td>{{ user.id }}</td>
    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>
  </tr>
</template>

<script>
export default {
  name: 'User',
  props: ['user']
}
</script>

<style>

</style>
