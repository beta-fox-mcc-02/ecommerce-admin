<template>
  <div class="col-2 p-0 sidebar">
    <div class="col-11 mt-3 menu-sidebar">
      <table>
        <tr class="spacer menu-group">
          <td class="icon-menu">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </td>
          <td>manage product</td>
        </tr>
        <tr class="menu-group">
          <td class="icon-menu">
            <i class="fa fa-user" aria-hidden="true"></i>
          </td>
          <td>manage user</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>
.sidebar {
  border-right: 1px solid rgb(221, 221, 221);
  height: 100%;
  font-size: 1.2rem;
}

.menu-sidebar ul{
  list-style: none;
}

.menu-sidebar ul li{
  margin: 10px;
}

.menu-sidebar{
  padding: 0;
  margin: 10px;
}

.icon-menu {
  width: 2em;
  padding-right: 10px;
}

.menu-group{
  display: block;
  margin-bottom: 20px;
}
</style>
