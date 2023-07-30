<template>
  <button 
    class="button-component"
      :style="{ 
      fontSize: fontSize,
      width: display === 'block' ? '100%' : ''
    }"
    @click="$emit('click')"
  >
    {{ btnName }}
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
    }
  }
}
</script>

<style lang="scss" scoped>
.button-component {
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
}
</style>
