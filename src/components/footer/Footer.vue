<template>
  <footer class="footer pt10 pb10">
    <div class="container">
      <div class="footer__body flex aic jcsb pt10 pb10">
        <div class="footer__logo">
          <img src="../../assets/img/dyson-logo.png" alt="dyson">
        </div>
        <nav class="footer__menu">
          <ul class="list">
            <li class="item">
              <a href="#" class="item-link">Что сломалось?</a>
            </li>
            <li class="item">
              <a href="#" class="item-link">Цены</a>
            </li>
            <li class="item">
              <a href="#" class="item-link">Преимущества</a>
            </li>
            <li class="item">
              <a href="#" class="item-link">Отзывы</a>
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
  name: 'FooterComponent'
}
</script>
  
<style lang="scss" scoped>
.footer {
  &__logo {
    img {
      display: block;
      width: 100px;
      height: 38px;
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
        font-size: 18px;
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
