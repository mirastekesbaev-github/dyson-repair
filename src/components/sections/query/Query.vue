<template>
  <section id="query-section">
    <div class="container flex jcc">
      <div class="content">
        <div class="content__header">
          <h2 class="section__title title tac">
            Процесс ремонта
          </h2>
        </div>
        <div class="content__body">
          <badger-accordion :options="options">
            <badger-accordion-item>
              <template slot="header">First Accordion Header</template>    
              <template slot="content">First Accordion Content</template>  
            </badger-accordion-item>

            <badger-accordion-item>
              <template slot="header">Second Accordion Header</template>    
              <template slot="content">Second Accordion Content</template>  
            </badger-accordion-item>
          </badger-accordion>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'

export default {
  name: 'QuerySection',
  data() {
    return {
      options: {
        openMultiplePanels: true
      }
    }
  },
  components: {
    BadgerAccordion,
    BadgerAccordionItem
  }
}
</script>

<style lang="scss" scoped>
#query-section {
  background-color: $gray50;
  .content {
    width: 700px;
  }
}

</style>
