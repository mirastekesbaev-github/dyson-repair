<template>
  <div id="app">
    <Header />
    <main class="main">
      <Greet />
      <Product />
      <Order />
      <Facility />
      <Query />
      <Contact />
    </main>
    <Footer />
    <OrderModal />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Greet from '@/components/sections/Greet.vue'
import Product from '@/components/sections/product/Product.vue'
import Order from '@/components/sections/Order.vue'
import Facility from '@/components/sections/facility/Facility.vue'
import Query from '@/components/sections/Query.vue'
import Contact from '@/components/sections/Contact.vue'
import Footer from '@/components/footer/Footer.vue'
import OrderModal from '@/components/modal/OrderModal.vue'

export default {
  name: 'App',
  components: {
    Header,
    Greet,
    Product,
    Order,
    Facility,
    Query,
    Contact,
    Footer,
    OrderModal
  }
}
</script>

<style lang="scss" scoped>

</style>
~