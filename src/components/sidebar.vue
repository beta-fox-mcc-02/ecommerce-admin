<template>
  <div id="sidebar">
    <div><button v-on:click="managementPage">management</button></div>
    <div><button v-on:click="productPage">product</button></div>
  </div>
</template>

<script>
export default {
  methods: {
    managementPage () { this.$router.push('/management') },
    productPage () { this.$router.push('/product') }
  }
}
</script>

<style scoped>

div#sidebar {
  width: 10rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: #189a1873;
}

div {
  width: 75%;
  border-bottom: 0.1rem solid #189a18;
  text-align: center;
}

div button{
  border-style: none;
  background-color: transparent;
  padding: 0.5rem 0;
  width: 100%;
  cursor: pointer;
  margin: 0.5rem 0;
  font-size: 15pt;
  color: white;
  font-style: italic;
  font-family: serif;
}

div button:hover{
  background-color: #189a18;
  border-radius: 0.2rem;
  box-shadow: 0rem 0rem 0.2rem black;
  animation: fade-in .1s infinite;
}

@keyframes fade-in {
  0%{ transform: rotate(0deg); }
  25%{ transform: rotate(-3deg); }
  50%{ transform: rotate(0deg); }
  75%{ transform: rotate(3deg); }
  100%{ transform: rotate(0deg); }
}

</style>
