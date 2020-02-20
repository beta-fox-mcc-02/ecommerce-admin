<template>
   <v-alert
    v-if="errors.length"
    text
    outlined
    color="deep-orange"
    icon="mdi-fire"
  >{{ errors.join('\n') }}</v-alert>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    errors: Array
  }
}
</script>
