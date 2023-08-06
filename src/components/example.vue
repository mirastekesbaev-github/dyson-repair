<template>
  <section id="section-1">
    <form action="https://formspree.io/f/xjvqgzbw" method="POST" class="order-form" @submit.prevent="send">
      <div class="order-form__field">
        <label class="label">Ваше имя <span>*</span></label>
        <input
            v-model.trim="$v.form.name.$model"
            class="input"
            id="name"
            type="text"
            name="Имя"
            placeholder="Ваше имя"
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
            name="phone"
            v-mask="'+7 (###) ###-##-##'"
            placeholder="+7 (___) ___-__-__"
        >
        <span v-if="!$v.form.phone.required && $v.form.phone.$dirty" class="error-text">
              Заполните обязательное поле!
            </span>
        <span v-if="!$v.form.phone.minLength && $v.form.phone.$dirty" class="error-text">
              Введите корректный номер телефона!
            </span>
      </div>
      <div class="order-form__field">
        <label class="label">Что сломалось?</label>
        <input
            v-model.trim="form.problem"
            class="input"
            type="text"
            name="message"
            placeholder="Сообщение"
        >
      </div>
      <div class="order-form__field">
        <button>Click</button>
      </div>
    </form>
  </section>
</template>

<script>
import { mask } from 'vue-the-mask'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'OrderSection',
  directives: { mask },
  data() {
    return {
      email: 'tleubaevazamat@mail.ru',
      pass: 'Aza.T1986@',
      form: {
        name: '',
        phone: '',
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
    send(e) {
      console.log('e', e)
      this.$v.$touch()
      console.log('this.$v', this.$v)
      if (!this.$v.$invalid) {
        console.log('validation success')
        const data = new FormData()
        data.append('Имя', this.form.name)
        data.append('Телефон', this.form.phone)
        data.append('Что сломалось?', this.form.problem)
        console.log('data', data)
        fetch(e.target.action, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
          },
          body: data
        })
            .then((response) => {
              if (!response.ok) {
                console.log('Пусто блять')
              }
            })
      } else {
        console.log('validation error')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
}

.form {
  width: 400px;
  height: 200px;
  padding: 32px 24px;
  border: 1px solid rgba(0, 0, 0, .16);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .field {
    width: 100%;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    input {
      width: 96%;
      padding: 8px 8px;
      border: 1px solid rgba(0, 0, 0, .16);
      border-radius: 4px;
    }
  }

  .button-field {
    button {
      width: 200px;
      padding: 8px 12px;
      border: 1px solid rgba(0, 0, 0, .16);
      border-radius: 4px;
      cursor: pointer;

      &:active {
        background: rgba(0, 0, 0, .16);
      }
    }
  }
}
</style>
