<template>
  <header class="header pt10 pb10">
    <div class="container">
      <div class="header__body flex aic jcsb pt10 pb10">
        <div class="header__logo">
          <img src="../../assets/img/dyson-logo.png" alt="dyson">
        </div>
        <div class="header__burger" @click="toggleMenuVisible">
          <div class="navbar">
            <div class="nav-container">
              <input class="checkbox" :class="{ 'checked': menuVisible }" type="checkbox" />
              <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>
            </div>
          </div>
        </div>
        <nav class="header__burger-menu flex fdc jcsb" :class="{ 'active': menuVisible }">
          <ul class="list">
            <li v-for="(item, index) in menu" :key="index" class="item" @click="scrollTo(item, true)">
              <a :href="item.href" class="item-link">{{ item.name }}</a>
            </li>
          </ul>

          <div class="db pl8 pr8">
            <HeaderContact text-align="tal"/>
            <span class="db mt10 pt6"></span>
            <UIButton btn-name="Перезвоните мне" font-size="14px" @click="showModal" />
          </div>
        </nav>
        <nav class="header__menu">
          <ul class="list flex aic">
            <li v-for="(item, index) in menu" :key="index" class="item" @click="scrollTo(item)">
              <a :href="item.href" class="item-link">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
        <div class="header__right flex aic jcsb">
          <div class="mr10 pr10">
            <HeaderContact />
          </div>
          <div class="header__button">
            <UIButton btn-name="Перезвоните мне" @click="showModal" />
          </div>
          <div class="header__phone-button">
            <HeaderPhone @click="showModal" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderContact from '@/components/header/components/HeaderContact.vue'
import HeaderPhone from '@/components/header/components/HeaderPhone.vue'
import UIButton from '@/components/ui/Button.vue'

export default {
  name: 'HeaderComponent',
  components: {
    HeaderContact,
    HeaderPhone,
    UIButton
  },
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
    ...mapGetters({
      menuVisible: 'menuVisible'
    }),
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
      this.$scrollTo(section, 1000, this.options)
    }
  }
}
</script>

<style lang="scss" scoped>
[data-aos="ds-fade-up"] {
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    transform: translateY(10px);

    &.aos-animate {
      transform: translateY(0);
    }
  }
}

.header {
  height: 86px;
  background: #fff;

  &__logo {
    width: 100px;
    height: 38px;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  &__burger {
    position: relative;

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 32px;
      height: 32px;
    }

    .nav-container {
      display: block;
      position: relative;
    }

    .nav-container .checkbox {
      position: absolute;
      display: block;
      height: 32px;
      width: 32px;
      top: -4px;
      left: -4px;
      z-index: 20;
      opacity: 0;
      cursor: pointer;
    }

    .nav-container .hamburger-lines {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      height: 24px;
      width: 32px;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .nav-container .hamburger-lines .line {
      display: block;
      height: 2px;
      width: 100%;
      border-radius: 10px;
      background: #0e2431;
    }

    .nav-container .hamburger-lines .line1 {
      transform-origin: 0% 0%;
      transition: transform 0.4s ease-in-out;
    }

    .nav-container .hamburger-lines .line2 {
      transition: transform 0.2s ease-in-out;
    }

    .nav-container .hamburger-lines .line3 {
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
    }

    .nav-container .checkbox.checked ~ .menu-items {
      transform: translateX(0);
    }

    .nav-container .checkbox.checked ~ .hamburger-lines .line1 {
      transform: rotate(45deg);
    }

    .nav-container .checkbox.checked ~ .hamburger-lines .line2 {
      transform: scaleY(0);
    }

    .nav-container .checkbox.checked ~ .hamburger-lines .line3 {
      transform: rotate(-45deg);
    }
  }

  &__burger-menu {
    position: fixed;
    top: 86px;
    right: 0;
    width: 360px;
    height: calc(100vh - 86px);
    padding: 24px 34px;
    z-index: 100;
    background-color: #fff;
    transition: .4s ease-out;
    transform: translateX(100%);

    &.active {
      transform: translateX(0);
    }

    .list {
      .item {
        font-size: 18px;
        padding: 8px;

        .item-link {
          text-decoration: none;
          color: $gray900;
        }
      }
    }
  }

  &__menu {
    .list {
      .item {
        margin: {
          right: 14px;
          left: 14px;
        }
        .item-link {
          position: relative;
          font-size: 16px;
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
}

// max-width
@media screen and (max-width: 1200px) {
  .header {
    &__menu {
      width: 580px;

      .list {
        justify-content: center;
        .item {
          margin: {
            left: 6px;
            right: 6px;
          }
        }
      }
    }
    
    &__button {
      display: none;
    }
  }
}

@media screen and (max-width: 992px) {
  .header {
    position: fixed;
    z-index: 100;
    height: 86px;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;

    &__menu {
      display: none;
    }

    &__right {
      display: none;
    }
  }
}

// min-width
@media screen and (min-width: 1200px) {
  .header {
    &__phone-button {
      display: none;
    }
  }
}

@media screen and (min-width: 992px) {
  .header {
    &__burger {
      display: none;
    }
  }
}

@media screen and (max-width: 576px) {
  .header {
    &__burger-menu {
      width: 100%;
    }
  }
}
</style>
