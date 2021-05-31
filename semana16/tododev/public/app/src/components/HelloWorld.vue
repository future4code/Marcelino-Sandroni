<template>
  <div class="hello">
    <h1 class="m-10 text-red-500">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
