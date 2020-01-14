<template>
  <div class="home">
    <ProductList/>
    <ShoppingCart/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList'
import ShoppingCart from '@/components/ShoppingCart'

export default {
  name: 'home',
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>
