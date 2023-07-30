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
              <template slot="header">
                <div class="header__inner flex aic jcsb" @click="collapseValues.first = !collapseValues.first">
                  <p>Сколько длится ремонт?</p>
                  <div class="icon">
                    <img v-if="!collapseValues.first" src="@/assets/icons/add-line.svg" alt="plus">
                    <img v-if="collapseValues.first" src="@/assets/icons/subtract-line.svg" alt="minus">
                  </div>
                </div>
              </template>    
              <template slot="content">
                <div class="content__inner">
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                </div>
              </template>  
            </badger-accordion-item>
            <badger-accordion-item>
              <template slot="header">
                <div class="header__inner flex aic jcsb" @click="collapseValues.second = !collapseValues.second">
                  <p>Сколько длится ремонт?</p>
                  <div class="icon">
                    <img v-if="!collapseValues.second" src="@/assets/icons/add-line.svg" alt="plus">
                    <img v-if="collapseValues.second" src="@/assets/icons/subtract-line.svg" alt="minus">
                  </div>
                </div>
              </template>    
              <template slot="content">
                <div class="content__inner">
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                </div>
              </template>  
            </badger-accordion-item>
            <badger-accordion-item>
              <template slot="header">
                <div class="header__inner flex aic jcsb" @click="collapseValues.third = !collapseValues.third">
                  <p>Сколько длится ремонт?</p>
                  <div class="icon">
                    <img v-if="!collapseValues.third" src="@/assets/icons/add-line.svg" alt="plus">
                    <img v-if="collapseValues.third" src="@/assets/icons/subtract-line.svg" alt="minus">
                  </div>
                </div>
              </template>    
              <template slot="content">
                <div class="content__inner">
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                </div>
              </template>  
            </badger-accordion-item>
            <badger-accordion-item>
              <template slot="header">
                <div class="header__inner flex aic jcsb" @click="collapseValues.fourth = !collapseValues.fourth">
                  <p>Сколько длится ремонт?</p>
                  <div class="icon">
                    <img v-if="!collapseValues.fourth" src="@/assets/icons/add-line.svg" alt="plus">
                    <img v-if="collapseValues.fourth" src="@/assets/icons/subtract-line.svg" alt="minus">
                  </div>
                </div>
              </template>    
              <template slot="content">
                <div class="content__inner">
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                </div>
              </template>  
            </badger-accordion-item>
            <badger-accordion-item>
              <template slot="header">
                <div class="header__inner flex aic jcsb" @click="collapseValues.fifth = !collapseValues.fifth">
                  <p>Сколько длится ремонт?</p>
                  <div class="icon">
                    <img v-if="!collapseValues.fifth" src="@/assets/icons/add-line.svg" alt="plus">
                    <img v-if="collapseValues.fifth" src="@/assets/icons/subtract-line.svg" alt="minus">
                  </div>
                </div>
              </template>    
              <template slot="content">
                <div class="content__inner">
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                  <p>First Accordion Content</p>
                </div>
              </template>  
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
      },
      collapseValues: {
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false
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
  position: relative;
  background: url('@/assets/img/dyson-repair-3.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(0, 0, 0, .7);
  }
  .content {
    z-index: 10;
    width: 700px;
    &__header {
      .title {
        color: $gray100;
      }
    }

    &__body {
      .js-badger-accordion-header {
        .header__inner {
          width: 100%;
          padding: 16px 0;
          color: $gray100;
          font-size: 20px;

          .icon {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        } 
      }
 
      .js-badger-accordion-panel {
        .content__inner {
          padding-bottom: 32px;
          color: $gray100;
        }
      }
    }
  }
}

</style>
