<template>
  <div class="product flex aic fdc">
    <div class="product__image">
      <img v-if="img === 'styler'" src="@/assets/img/styler.webp" alt="styler">
      <img v-if="img === 'dryer'" src="@/assets/img/dryer.jpg" alt="dryer">
      <img v-if="img === 'humidifier'" src="@/assets/img/humidifier.jpg" alt="humidifier">
      <img v-if="img === 'hairdryer'" src="@/assets/img/hairdryer.jpeg" alt="hairdryer">
      <img v-if="img === 'vacuum'" src="@/assets/img/vacuum.webp" alt="vacuum">
      <img v-if="img === 'rectifier'" src="@/assets/img/rectifier.jpg" alt="rectifier">
    </div>
    <p class="product__name">
      {{ name }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    img: {
      type: String,
      default: () => ''
    },
    name: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  &__image {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;

    img {
        display: block;
        width: 100%;
        height: auto;
    }
  }

  &__name {
    text-align: center;
    font-size: 16px;
    font-weight: 400;

    span {
      font-family: 'Quicksand', 'sans-serif';
      font-weight: 500;
    }
  }
}
</style>
