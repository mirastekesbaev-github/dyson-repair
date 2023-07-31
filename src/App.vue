<template>
  <div id="app">
    <transition name="fade">
      <div
          v-if="overlayVisible"
          class="overlay"
          @click="closeMenu"
      />
    </transition>
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
import { mapGetters } from 'vuex'
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
  },
  computed: {
    ...mapGetters({
      overlayVisible: 'overlayVisible'
    })
  },
  methods: {
    closeMenu() {
      this.$store.commit('setMenuVisible', false)
      this.$store.commit('setOverlayVisible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 992px) {
  #app {
    position: relative;
    padding-top: 86px;

    .overlay {
      position: absolute;
      z-index: 100;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
~
