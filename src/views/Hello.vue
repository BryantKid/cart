<template>
  <div>
    <input v-model="price"/>
    {{price}}
    <h2 class="hello"> {{name}} {{ $attrs }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Vue!'
    }
  },
  data(){
      return{
        price:1899
      }
  }
}
</script>