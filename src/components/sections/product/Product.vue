<template>
  <section id="product-section">
    <div class="container">
      <div class="content">
        <div class="content__header">
          <h2 class="section__title title tac">
            Узнайте стоимость ремонта и получите <span>скидку 2000 тг.</span> при первом обращении
          </h2>
          <p class="section__subtitle subtitle tac">
            Ответьте всего на 2 вопроса и получите предварительную стоимость работ,
            чтобы сразу понимать как планировать свой бюджет.
          </p>
        </div>
        <div class="content__body">
          <div class="row gy-5">
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <ProductItem img="styler" name="Стайлер" />
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <ProductItem img="dryer" name="Сушилка для рук" />
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <ProductItem img="humidifier" name="Увлажнитель воздуха" />
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <ProductItem img="hairdryer" name="Фен" />
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <ProductItem img="vacuum" name="Пылесос" />
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <ProductItem img="rectifier" name="Выпрямитель" />
            </div>
          </div>
        </div>
        <div class="content__carousel">
          <VueSlickCarousel :centerMode="true" :arrows="false">
            <ProductItem img="rectifier" name="Выпрямитель" />
            <ProductItem img="styler" name="Стайлер" />
            <ProductItem img="dryer" name="Сушилка для рук" />
            <ProductItem img="humidifier" name="Увлажнитель воздуха" />
            <ProductItem img="hairdryer" name="Фен" />
            <ProductItem img="vacuum" name="Пылесос" />
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductItem from './ProductItem.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: 'ProductSection',
  components: {
    ProductItem,
    VueSlickCarousel
  }
}
</script>

<style lang="scss" scoped>
#product-section {
  .content {
    &__header {
      margin-bottom: 70px;
      .title {
        padding: 0 212px;
      }

      .subtitle {
        padding: 0 242px;
      }
    }

    &__body {
      margin-bottom: 32px;
      .title {
        margin-bottom: 42px;
        text-align: center;
        font-size: 28px;
        font-weight: 700;
        line-height: 100%;
      }
    }
  }
}

@media screen and (max-width: 1400px) {
  #product-section {
    .content {
      &__header {
        .title {
          padding: 0 162px;
        }

        .subtitle {
          padding: 0 172px;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  #product-section {
    .content {
      &__header {
        .title {
          padding: 0 52px;
        }

        .subtitle {
          padding: 0 72px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #product-section {
    .content {
      &__header {
        .title {
          padding: 0 2px;
        }

        .subtitle {
          padding: 0 32px;
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  #product-section {
    .content {
      &__body {
        display: none;
      }
    }
  }
}

@media screen and (min-width: 576px) {
  #product-section {
    .content {
      &__carousel {
        display: none;
      }
    }
  }
}
</style>
