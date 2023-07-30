<template>
  <section id="contact-section">
    <div class="container">
      <div class="content">
        <div class="content__body">
          <div class="row">
            <div class="body-left col-xxl-6 col-xl-6 col-lg-6">
              <h2 class="section__title title">
                    Контакты
              </h2>
              <p class="section__subtitle subtitle">
                    Сервисный центр работает с 9 утра до 8 вечера. Без выходных. 
              </p>
              <div class="body-left__item">
                <p>
                    <span>Адрес:</span>
                    г. Алматы, ул. Кабанбай батыра, 150
                </p>
              </div>
              <div class="body-left__item">
                <p>
                    <span>Телофон: </span>
                    <a href="tel: +7 707 555-30-27">+7 707 555-30-27</a>
                </p>
              </div>
              <div class="body-left__item">
                <div class="box">
                    <span>
                        Наши социональные сети:
                    </span>
                    <div class="item__icons flex">
                        <div class="item__icon">
                            <a href="https://instagram.com" target="_blank">
                            <img src="@/assets/icons/instagram-line.svg" alt="">
                            </a>
                        </div>
                        <div class="item__icon">
                            <a href="https://web.whatsapp.com" target="_blank">
                            <img src="@/assets/icons/whatsapp-line.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
              </div>
              <div class="body-left__item">
                <UIButton btn-name="Напишите нам" @click="showModal" />
              </div>
            </div>
            <div class="body-right col-xxl-6 col-xl-6 col-lg-6">
              <iframe 
                src="https://yandex.com/map-widget/v1/?um=constructor%3Ae2feed00af6c44b057f2549839226e528ed612e1b16f7b3970c07d8a40b57137&amp;source=constructor" 
                width="100%" 
                height="476" 
                frameborder="0">
              </iframe>
            </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UIButton from '@/components/ui/Button.vue'

export default {
  name: 'ContactSection',
  components: {
    UIButton
  },
  methods: {
    showModal() {
      this.$modal.show('order-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
#contact-section {
  background: $gray200;
  .content {
    &__body {
      .body-left {
        .subtitle {
          margin-bottom: 52px;
        }

        &__item {
          padding: 24px 0;
          border-top: 1px solid $gray300;
        
          &:last-child {
            border-top: none;
          }

          p {
            a {
              color: $gray900;

              &:hover {
                text-decoration: none;
              }
            }

            span {
              font-weight: 700;
            }
          }

          .item__icons {
            margin-top: 16px;
            .item__icon {
              margin-right: 6px;
              width: 28px;
              height: 28px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  #contact-section {
    .content {
      &__body {
        .body-right {
          margin-top: 24px;
          padding: 12px;
        }
      }
    }
  }
}
</style>