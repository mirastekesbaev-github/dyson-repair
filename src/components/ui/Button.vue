<template>
  <button
    :type="type" 
    class="button-component"
      :style="{ 
      fontSize: fontSize,
      width: display === 'block' ? '100%' : ''
    }"
    :class="{ 'load': load }"
    :disabled="load"
    @click="$emit('click')"
  >
    <span class="button-component-text">{{ btnName }}</span>
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    btnName: {
      type: String,
      required: true
    },
    fontSize: {
      type: String,
      default: '16px'
    },
    display: {
      type: String,
      required: false,
      default: () => 'inline-block'
    },
    type: {
      type: String,
      default: () => 'button'
    },
    load: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped>
.button-component {
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(21deg, #dd03e4, #5611ec);
  display: inline-block;
  position: relative;
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  transition: .2s linear;

  &:hover {
    -webkit-filter: brightness(120%);
    filter: brightness(120%);
  }

  &:active {
    transform: scale(0.96);
  }

  &-text {
    transition: all .2s;
  }

  &.load .button-component-text {
    visibility: hidden;
    opacity: 0;
  }

  &.load::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
  }

  @keyframes button-loading-spinner {
    from {
      transform: rotate(0turn);
    }

    to {
      transform: rotate(3turn);
    }
  }
}
</style>
