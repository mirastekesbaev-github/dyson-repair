<template>
    <div class="order-error">
      <modal
        name="order-error-modal"
        :width="400"
        height="auto"
        classes="modal"
        overlay-transition="fade"
        :adaptive="true"
      >
        <div class="w100 flex fdc aic jcc">
          <button class="modal-button" @click="closeModal">
            <img src="@/assets/icons/close-line.svg">
          </button>
          <div class="icon">
            <img src="@/assets/icons/close-circle-line.svg" alt="check">
          </div>
          <h4 class="title tac"> Сервис не доступен! </h4>
          <p class="text tac"> Сервис временно не доступен. </p>
          <p class="text tac "> Попробуйте позже. </p>
          <UIButton btn-name="Готово" display="block" @click="closeModal"/>
        </div>
      </modal>
    </div>
  </template>
  
  <script>
  import UIButton from '@/components/ui/Button.vue'
  
  export default {
    name: 'OrderSuccessModal',
    components: { UIButton },
    methods: {
      closeModal() {
        this.$modal.hide('order-error-modal')
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .order-error {
    .icon {
      width: 62px;
      margin: {
        top: 24px;
        bottom: 14px;
      }
    }
  
    .title {
      font-weight: 600;
      font-size: 22px;
      line-height: 110%;
      color: $gray900;
      margin-bottom: 12px;
    }
  
    .text {
      font-weight: 400;
      font-size: 16px;
      line-height: 110%;
  
      &:last-of-type {
        margin-bottom: 32px;
      }
    }
  }
  </style>