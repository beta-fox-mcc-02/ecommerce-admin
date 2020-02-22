<template>
  <nav id="navbar" class="blue-grey-darken-4 text-grey text-lighten-5">
    <div class="nav-wrapper blue-grey-darken-4 text-grey text-lighten-5">
      <a href="#" class="brand-logo center">CE8 Admin</a>

      <ul id="greeting" class="right">
        <li>Welcome user</li>
      </ul>

      <ul id="dash" class="left">
        <li>Dashboard</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
  #navbar {
    background-color: #263238;
    color: #eceff1
  }

  #greeting {
    margin: 0 3rem
  }

  #dash {
    margin: 0 3rem
  }
</style>
