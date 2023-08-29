<template>
  <footer class="footer pt10 pb10">
    <div class="container">
      <div class="footer__body flex aic jcsb">
        <div class="footer__logo">
          <img src="../../assets/img/dyson-logo-2.jpg" alt="dyson">
        </div>
        <nav class="footer__menu">
          <ul class="list">
            <li v-for="(item, index) in menu" :key="index" class="item" @click="scrollTo(item)">
              <a :href="item.href" class="item-link">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
        <div class="footer__call flex aic jcsb">
          <div class="box">
            <div class="footer__contact mb10">
              <a href="tel: +7 707 555-30-27">+7 707 555-30-27</a>
            </div>
            <div class="footer__timetable">Работаем с 9:00 до 20:00</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      width: 0,
      check: false,
      menu: [
      {
        href: '#',
        name: 'Что мы ремонтируем?',
        section: 'product-section'
      },
      {
        href: '#',
        name: 'Преимущества',
        section: 'facility-section'
      },
      {
        href: '#',
        name: 'Процесс ремонта',
        section: 'query-section'
      },
      {
        href: '#',
        name: 'Контакты',
        section: 'contact-section'
      }
      ]
    }
  },
  computed: {
    options () {
      if (this.width <= 992 ) {
        return { offset: -86 }
      }
      return {}
    }
  },
  created () {
    window.addEventListener('resize', this.resize)
    this.resize()
  },
  methods: {
    resize() {
      this.width = window.innerWidth
    },
    showModal () {
      this.$modal.show('order-modal')
    },
    toggleMenuVisible () {
      this.$store.commit('setMenuVisible', !this.menuVisible)
      this.$store.commit('setOverlayVisible', this.menuVisible)
    },
    scrollTo(value, isSmall = false) {
      if (isSmall) {
        this.$store.commit('setMenuVisible', false)
        this.$store.commit('setOverlayVisible', false)
      }
      const section = document.getElementById(value.section)
      this.$scrollTo(section, 750, this.options)
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  &__logo {
    img {
      display: block;
      width: 142px;
      height: 52px;
    }
  }

  &__menu {
    .list {
      display: flex;
      align-items: center;
      .item {
        margin: {
        right: 14px;
        left: 14px;
      }
      .item-link {
        position: relative;
        font-size: 17px;
        font-weight: 400;
        color: $gray900;
        text-decoration: none;
        transition: .2s linear;

        &:hover {
          background: -webkit-linear-gradient(21deg, #dd03e4, #5611ec);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1px;
          bottom: 0;
          left: 0;
          background: linear-gradient(21deg, #dd03e4, #5611ec);
          transform-origin: bottom right;
          transition: transform .2s ease-out;
        }

        &:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        }
      }
    }
  }

  &__contact {
    display: block;
    a {
      font-size: 24px;
      font-weight: 900;
      color: $gray900;
      &:hover {
        text-decoration: none;
      }
    }
 }

  &__timetable {
    text-align: right;
  }
}

@media screen and (max-width: 992px) {
  .footer {
    &__body {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);

      .footer__logo {
        display: flex;
        justify-content: center;
      }

      .footer__menu {
        .list {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;

          .item {
            margin-bottom: 18px;

            .item-link {
              &:hover {
                background: $gray900;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              &::after {
                content: none;
              }
            }
          }
        }
      }

      .footer__call {
        display: flex;
        margin-top: 12px;
        margin-bottom: 18px;
        justify-content: center;
      }
    }
  }
}
</style>
