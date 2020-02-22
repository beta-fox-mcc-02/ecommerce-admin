<template>
  <div class="content">
      <div class="content-isi">
          <div class="content-isi-pict">
              <i class="fas fa-phone" style="font-size: 125px; color: blue"></i>
          </div>
          <div class="content-isi-text">
              text
          </div>
      </div>
      <div class="content-isi">
          <div class="content-isi-pict">
              <i class="fas fa-truck" style="font-size: 125px; color: orangered"></i>
          </div>
          <div class="content-isi-text">
              text
          </div>
      </div>
      <div class="content-isi">
          <div class="content-isi-pict">
              <i class="fas fa-money-bill-alt" style="font-size: 125px; color: green"></i>
          </div>
          <div class="content-isi-text">
              text
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeContent'
}
</script>

<style scoped>
.content{
    height: 10vh;
    display: flex;
    justify-content: center;
    margin-bottom: 30vh
}
.content-isi {
    padding: 130px 60px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center
}
.content-isi-pict {
    border: 1px solid red;
    /* padding: 70px 10px; */
}
.content-isi-text {
    border: 1px solid blue;
    /* padding: 20px 70px; */
}
</style>
