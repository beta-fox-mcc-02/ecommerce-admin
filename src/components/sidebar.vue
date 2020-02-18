<template>
  <div id="sidebar">
    <div><button v-on:click="summaryPage">summary</button></div>
    <div><button v-on:click="productPage">product</button></div>
  </div>
</template>

<script>
export default {
  methods: {
    summaryPage () { this.$router.push('/summary') },
    productPage () { this.$router.push('/product') }
  }
}
</script>

<style scoped>

div#sidebar {
  width: 10rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 39.1rem;
  background-color: #189a1873;
}

div {
  width: 50%;
  text-align: center;
}

div button{
    border-style: none;
    background-color: transparent;
    padding: 0.5rem 0;
    width: 5rem;
    cursor: pointer;
    margin: 0.5rem 0;
}

div button:hover{
  background-color: #189a18;
  border-radius: 0.2rem;
  box-shadow: 0rem 0rem 0.2rem black
}

</style>
