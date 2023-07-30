<template>
  <div>
    <div class="header-contact__number mb8">
      <a href="tel: +7 707 555-30-27">
        +7 707 555-30-27
      </a>
    </div>
    <div class="header-contact__timetable" :class="textAlign">
      Работаем с 9:00 до 20:00
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderContact',
  props: {
    textAlign: {
      type: String,
      default: () => 'tar'
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-contact__number {
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

  .header-contact__timetable {
    font-size: 14px;
  }
</style>