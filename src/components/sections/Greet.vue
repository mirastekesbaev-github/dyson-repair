<template>
  <section id="start-section">
    <div class="container h100">
      <div class="content h100 flex fdc jcc">
        <h2 class="title">Ремонт всей техники <span>dyson</span> с гарантией 3 года</h2>
        <ul class="list">
          <li v-for="(item, index) in list" :key="index" class="item">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z" />
              </svg>
            </span>
            <p class="text">{{ item.text }}</p>
          </li>
        </ul>
        <div class="content__button">
          <UIButton btn-name="Вызвать мастера" @click="showModal" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UIButton from '@/components/ui/Button.vue'

export default {
  name: 'GreetSection',
  components: { UIButton },
  data() {
    return {
      list: [
        { text: 'Бесплатный выезд мастера на дом' },
        { text: 'Бесплатная диагностика за 15 мин' },
        { text: 'Бесплатная доставка в сервис и обратно' },
        { text: 'Оригинальные запчасти на всю технику' },
        { text: 'Авторизованный сервисный центр' },
        { text: 'Профессиональный ремонт' },
        { text: 'Широкий спектр услуг' }
      ]
    }
  },
  methods: {
    showModal() {
      this.$modal.show('order-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
#start-section {
  z-index: 0;
  position: relative;
  background-image: url("@/assets/img/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  height: calc(100vh - 86px);

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(0, 0, 0, .6);
  }

  .content {
    .title {
      z-index: 10;
      margin-bottom: 16px;
      font-size: 46px;
      font-weight: 700;
      line-height: 100%;
      color: #fff;

      span {
        font-family: 'Quicksand', sans-serif;
        font-weight: 700;
        color: rgb(216, 155, 240);
      }
    }

    .list {
      margin-bottom: 22px;
      .item {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 6px;
        .icon {
          z-index: 10;
          margin-right: 12px;
          width: 32px;
          height: 32px;
          min-width: 32px;
          min-height: 32px;
          fill: #e7aaff;
        }

        .text {
          font-size: 28px;
          font-weight: 400;
          line-height: 126%;
          color: #fff;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #start-section {
    .content {
      .title {
        text-align: center;
        font-size: 36px;
      }

      .list {
        .item {
          margin-bottom: 12px;
          .text {
            font-weight: 400;
            font-size: 22px;
            line-height: 100%;
          }
        }
      }

      &__button {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
