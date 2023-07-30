<template>
  <section id="start-section">
    <div class="container h100">
      <div class="content h100 flex fdc jcc">
        <h2 class="title">Ремонт всей техники Dyson с гарантией 3 года</h2>
        <ul class="list">
          <li class="item">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772
                    21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999
                    11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
                    fill="#fff"
                />
              </svg>
            </span>
            <p class="text">Бесплатный выезд мастера на дом</p>
          </li>
          <li class="item">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772
                    21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999
                    11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
                    fill="#fff"
                />
              </svg>
            </span>
            <p class="text">Бесплатная диагностика за 15 мин</p>
          </li>
          <li class="item">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772
                    21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999
                    11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
                    fill="#fff"
                />
              </svg>
            </span>
            <p class="text">Бесплатная доставка в сервис и обратно</p>
          </li>
          <li class="item">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772
                    21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999
                    11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
                    fill="#fff"
                />
              </svg>
            </span>
            <p class="text">Оригинальные запчасти на всю технику</p>
          </li>
          <li class="item">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772
                    21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999
                    11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
                    fill="#fff"
                />
              </svg>
            </span>
            <p class="text">Авторизованный сервисный центр</p>
          </li>
          <li class="item">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772
                    21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999
                    11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
                    fill="#fff"
                />
              </svg>
            </span>
            <p class="text">Профессиональный ремонт</p>
          </li>
          <li class="item">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772
                    21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999
                    11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
                    fill="#fff"
                />
              </svg>
            </span>
            <p class="text">Широкий спектр услуг</p>
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
      font-family: 'Quicksand', sans-serif;
      z-index: 10;
      margin-bottom: 16px;
      font-size: 46px;
      font-weight: 700;
      line-height: 100%;
      color: #fff;
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
          margin-right: 8px;
          svg {
            width: 32px;
            height: 32px;
          }
        }

        .text {
          font-size: 28px;
          font-weight: 400;
          line-height: 126%;
          color: #fff;
        }
      }

      .item::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(23%, -53%);
        width: 22px;
        height: 22px;
        background: linear-gradient(21deg, #dd03e4, #5611ec);
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
          .text {
            font-size: 24px;
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
