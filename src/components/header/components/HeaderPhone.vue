<template>
  <button class="button-phone-component" @click="$emit('click')">
    <svg 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink" 
      x="0px" 
      y="0px" 
      viewBox="0 0 17.544 25.215" 
      enable-background="new 0 0 17.544 25.215" 
      xml:space="preserve">
      <path 
        fill-rule="evenodd" 
        clip-rule="evenodd" 
        fill="#fff" 
        d="M12.22,6.784c-0.135,0.871-1.654,4.073-2.084,4.89c-0.576,1.087-2.779,4.344-3.724,5.065l0,0l-0.775,0.532l-1.879-0.616L0,20.653l0.129,1.043l2.123,2.832l0.916,0.687c0,0,13.474-8.596,14.376-24.03c0,0-0.266-0.297-0.777-0.87L13.228,0l-1.16,0.454l-1.029,4.941l1.127,1.23">
      </path>
    </svg>
  </button>    
</template>

<script>
export default {
  name: 'HeaderPhone'
}
</script>

<style lang="scss" scoped>
.button-phone-component {
  cursor: pointer;
  width: 44px;
  height: 42px;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(21deg, #dd03e4, #5611ec);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: none;
  border-radius: 50%;
  font-size: 16px;
  font-weight: 600;
  transition: .2s linear;
  &:hover {
    -webkit-filter: brightness(120%);
    filter: brightness(120%);
  }
  &:active {
    transform: scale(0.96);
  }
  svg {
    width: 22px;
    height: 22px;
    fill: #fff;
  }
}
</style>
