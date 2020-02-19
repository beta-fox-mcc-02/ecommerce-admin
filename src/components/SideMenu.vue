<template>
  <b-menu>
    <b-menu-list label="Menu">
      <b-menu-item
        icon="cart"
        tag="router-link"
        to="/dashboard"
        label="Products"
      ></b-menu-item>
      <b-menu-item
        icon="cart-plus"
        tag="router-link"
        to="/dashboard/add"
        label="Add Product"
      ></b-menu-item>
    </b-menu-list>
    <b-menu-list label="Actions">
      <b-menu-item icon="key" label="Logout"></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
export default {
  data() {
    return {
      isActive: true
    }
  }
}
</script>
