<template>
  <div class="order">
    <modal
      name="order-modal"
      :width="400"
      height="auto"
      classes="modal"
      overlay-transition="fade"
      @before-close="beforeClose"
      :adaptive="true"
    >
      <button class="modal-button" @click="closeModal">
        <img src="@/assets/icons/close-line.svg">
      </button>
      <h2 class="modal-title tac">
          Заявка на обратный звонок
        </h2>
      <div class="w100">
        <form action="https://formspree.io/f/xjvqgzbw" method="POST" class="modal-form" @submit.prevent="submit">
          <div class="form-field" :class="{ 'error': $v.form.name.$error }">
            <label for="name">Ваше имя</label>
            <input
              v-model.trim="$v.form.name.$model"
              id="name"
              type="text"
              name="name"
            >
            <span v-if="!$v.form.name.required && $v.form.name.$dirty" class="error-text">
              Заполните обязательное поле!
            </span>
          </div>
          <div class="form-field" :class="{ 'error': $v.form.phone.$error }">
            <label for="phone">Ваш телефон</label>
            <input
              v-model.trim="$v.form.phone.$model"
              id="phone"
              type="text"
              name="phone"
              v-mask="'+7 (###) ###-##-##'"
            >
            <span v-if="!$v.form.phone.required && $v.form.phone.$dirty" class="error-text">
              Заполните обязательное поле!
            </span>
            <span v-if="!$v.form.phone.minLength && $v.form.phone.$dirty" class="error-text">
              Введите корректный номер телефона!
            </span>
          </div>
          <UIButton btn-name="Отправить" display="block" type="submit" :load="load" />
        </form>
      </div>
    </modal>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { mask } from 'vue-the-mask'
import UIButton from '@/components/ui/Button.vue'

export default {
  name: 'OrderModal',
  directives: { mask },
  components: { UIButton },
  data() {
    return {
      load: false,
      form: {
        name: '',
        phone: ''
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
  destroyed() {
    this.name = ''
    this.phone = ''
    this.$v.$reset()
  },
  methods: {
    beforeClose() {
      this.name = ''
      this.phone = ''
      this.$v.$reset()
    },
    closeModal() {
      this.$modal.hide('order-modal')
    },
    submit(e) {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.load = true
        const data = new FormData()
        data.append('Имя', this.form.name)
        data.append('Телефон', this.form.phone)
        fetch(e.target.action, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
          },
          body: data
        })
          .then((response) => {
            if (response.ok) {
              this.$modal.hide('order-modal')
              this.$modal.show('order-success-modal') 
            } else {
              this.$modal.hide('order-modal')
              this.$modal.show('order-error-modal')
            }
          })
          .finally(() => {
            this.load = false
          })
      }
    }
  }
}
</script>

<style lang="scss">
.modal {
  position: relative;
  background-color: #fff;
  width: 460px;
  padding: 32px 32px 42px;
  border-radius: 4px;
  box-shadow: 0 0 0 0 rgba(27, 33, 58, 0.4) !important;

  &-button {
    position: absolute;
    top: 14px;
    right: 14px;
    background: none;
    outline: none;
    border: none;
    width: 28px;
    height: 28px;
    margin: 0;
    padding: 0;
    cursor: pointer;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  &-title {
    padding-top: 24px;
    padding-bottom: 18px;
    font-size: 22px;
    font-weight: 600;
    line-height: 100%;
    color: $gray700;
  }

  &-form {
    .form-field {
      margin-top: 16px;
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;

      label {
        position: relative;
        display: inline-block;
        margin-bottom: 8px;

        &::after {
          content: '*';
          position: absolute;
          top: -2px;
          margin-left: 3px;
          color: $error500;
          width: 100%;
          height: 100%;
        }
      }

      input {
        z-index: 10;
        padding: 12px 12px;
        outline: none;
        border: 1px solid $gray400;
        border-radius: 4px;
        font-size: 16px;
      }

      span.error-text {
        display: block;
        margin-top: 2px;
        z-index: 0;
        font-size: 13px;
        color: $error500;
        animation: myAni 1s linear forwards;
      }

      @keyframes myAni {
        0% {
            height: 0;
        }
        100% {
            height: 100%;
        }
      }

      &.error input {
        border-color: $error500;
      }

      &:nth-child(2) {
        margin-bottom: 42px;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .modal {

  }
}
</style>
