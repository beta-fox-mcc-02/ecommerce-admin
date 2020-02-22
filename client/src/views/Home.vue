<template>
  <div class="container">
    <Carousel/>
    <MenWatch/>
    <LadiesWatch/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '../components/Carousel'
import MenWatch from '../components/MenWatch'
import LadiesWatch from '../components/LadiesWatch'

export default {
  name: 'Home',
  components: {
    MenWatch,
    Carousel,
    LadiesWatch
  }
}
</script>

<style>
.box-view {
  text-align: left;
  background: #181818;
}

.head {
  border-bottom: white solid 2px;
}
</style>
