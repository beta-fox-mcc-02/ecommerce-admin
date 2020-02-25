<template>
  <div id="sidebar">
    <div><button v-on:click="managementPage"><i class="fas fa-users"></i><p>Management</p></button></div>
    <div><button v-on:click="productPage"><i class="fas fa-boxes"></i><p>Product</p></button></div>
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
    width: 20vw;
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    box-shadow: 0.1rem 0.2rem 0.2rem #d4d4d4;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: center;
    align-items: center;
    height: 50vh;
    background-color: #f5f5f5;
}

div {
  width: 90%;
  height: 20%;
  text-align: center;
}

section#main-content {
    margin-left: 21vw;
    margin-top: 0.5rem;
}

div button{
  border-style: none;
  background-color: transparent;
  padding: 0.5rem 0;
  width: 100%;
  cursor: pointer;
  margin: 0.5rem 0;
}

div button:hover{
  background-color: #189a84;
  border-radius: 0.2rem;
  box-shadow: 0rem 0rem 0.2rem black;
}

div button:hover p, div button:hover i{
  color: white
}

i.fas.fa-users, i.fas.fa-boxes {
    font-size: 20pt;
}

p {
    font-style: italic;
    margin-top: 0.5rem;
    font-family: none;
    color: #b3b3b3;
}

</style>
