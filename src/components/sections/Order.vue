<template>
  <section id="order-section" ref="orderSection">
    <div class="container">
      <div class="content">
        <div class="content__header">
          <h2 class="section__title title tac">
            <p>Получите скидку 10% на ремонт, отправив заявку с сайта</p>
          </h2>
        </div>
        <div class="content__body flex jcc">
          <form action="https://formspree.io/f/xeqbagjv" method="POST" class="order-form" @submit.prevent="submit">
            <div class="order-form__field">
              <label class="label">Ваше имя <span>*</span></label>
              <input
                v-model.trim="$v.form.name.$model"
                class="input"
                id="name"
                type="text"
              >
              <span v-if="!$v.form.name.required && $v.form.name.$dirty" class="error-text">
                Заполните обязательное поле!
              </span>
            </div>
            <div class="order-form__field">
              <label class="label">Ваш телефон <span>*</span></label>
              <input
                v-model.trim="$v.form.phone.$model"
                class="input"
                id="phone"
                type="text"
                v-mask="'+7 (###) ###-##-##'"
              >
              <span v-if="!$v.form.phone.required && $v.form.phone.$dirty" class="error-text">
                Заполните обязательное поле!
              </span>
              <span v-if="!$v.form.phone.minLength && $v.form.phone.$dirty" class="error-text">
                Введите корректный номер телефона!
              </span>
            </div>
            <div class="order-form__field">
              <label class="label">Техника</label>
              <input v-model="form.technics" class="input" type="text">
            </div>
            <div class="order-form__field">
              <label class="label">Что сломалось?</label>
              <input v-model="form.problem" class="input" type="text">
            </div>
            <div class="order-form__field">
              <UIButton btn-name="Оформить заявку" display="block" type="submit" :load="load" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UIButton from '@/components/ui/Button.vue'
import { mask } from 'vue-the-mask'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'OrderSection',
  directives: { mask },
  components: { UIButton },
  data() {
    return {
      load: false,
      form: {
        name: '',
        phone: '',
        technics: '',
        problem: ''
      }
    }
  },
  validations: {
    form: {
      name: { required },
      phone: {
        required,
        minLength: minLength(18)
      }
    }
  },
  methods: {
    submit(e) {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.load = true
        const data = new FormData()
        data.append('Заявка с сайта (Скидка 10%)', 'Да')
        data.append('Имя', this.form.name)
        data.append('Телефон', this.form.phone)
        data.append('Техника', this.form.technics || '-')
        data.append('Что случилось?', this.form.problem || '-')
        fetch(e.target.action, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
          },
          body: data
        })
          .then((response) => {
            if (response.ok) {
              this.$modal.show('order-success-modal')
            } else {
              this.$modal.show('order-error-modal')
            }
          })
          .finally(() => {
            this.load = false
            this.form = {
              name: '',
              phone: '',
              technics: '',
              problem: ''
            }
            this.$v.$reset()
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#order-section {
  background: url('@/assets/img/order-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-color: $primary50;

  .content {
    &__header {
      margin-bottom: 72px;
      .title {
        color: $gray100;
        padding: 0 282px;
      }
    }

    &__body {
      .order-form {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-column-gap: 24px;

        &__field {
          position: relative;

          .label {
            color: #fff;
            position: absolute;
            top: -24px;
            font-size: 16px;

            span {
              color: $error500;
            }
          }

          .input {
            width: 100%;
            color: #fff;
            background: rgba(150, 150, 150, 0.3);
            padding: 12px 12px;
            font-size: 16px;
            border: none;
            outline: none;
            border-radius: 6px;
            transition: .3s ease;

            &:focus {
              background: rgba(202, 202, 202, 0.3);
            }
          }

          span.error-text {
            position: absolute;
            display: block;
            margin-top: 2px;
            z-index: 0;
            font-size: 13px;
            color: $error500;
            animation: myAni 1s linear forwards;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1400px) {
  #order-section {
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

@media screen and (max-width: 1200px) {
  #order-section {
    .content {
      &__body {
        .order-form {
          width: 500px;
          grid-template-columns: 1fr;
          grid-template-rows: repeat(4, 1fr);
          grid-row-gap: 48px;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  #order-section {
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
  #order-section {
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

@media screen and (min-width: 576px) {
  #order-section {
    .content {
      &__carousel {
        display: none;
      }
    }
  }
}
</style>
