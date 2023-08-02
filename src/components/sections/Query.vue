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
          <BadgerAccordion :options="options">
            <BadgerAccordionItem>
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
                  <p class="mb10">1-3 дня.</p>
                  <p>
                    Точные сроки ремонта станут известны только во время самого ремонта.
                    Чем серьезнее поломка, тем дольше будет ремонт.
                  </p>
                </div>
              </template>
            </BadgerAccordionItem>
            <BadgerAccordionItem>
              <template slot="header">
                <div class="header__inner flex aic jcsb" @click="collapseValues.second = !collapseValues.second">
                  <p>Как проходит ремонт?</p>
                  <div class="icon">
                    <img v-if="!collapseValues.second" src="@/assets/icons/add-line.svg" alt="plus">
                    <img v-if="collapseValues.second" src="@/assets/icons/subtract-line.svg" alt="minus">
                  </div>
                </div>
              </template>
              <template slot="content">
                <div class="content__inner">
                  <ul>
                    <li>Доставляем технику в сервисный центр: доставка приедет к вам в течение часа</li>
                    <li>Определяем проблему</li>
                    <li>Согласовываем цену с вами: называем цену за ремонт + стоимость запчасти</li>
                    <li>Заказываем запчасти с нашего склада</li>
                    <li>Чиним</li>
                    <li>Проверяем качество</li>
                  </ul>
                </div>
              </template>
            </BadgerAccordionItem>
            <BadgerAccordionItem>
              <template slot="header">
                <div class="header__inner flex aic jcsb" @click="collapseValues.third = !collapseValues.third">
                  <p>Как проходит контроль качества?</p>
                  <div class="icon">
                    <img v-if="!collapseValues.third" src="@/assets/icons/add-line.svg" alt="plus">
                    <img v-if="collapseValues.third" src="@/assets/icons/subtract-line.svg" alt="minus">
                  </div>
                </div>
              </template>
              <template slot="content">
                <div class="content__inner">
                  <p>
                    После ремонта инженер наблюдает за включенным устройством.
                    Если дефект проявится опять, устройство будут ремонтировать еще раз.
                  </p>
                </div>
              </template>
            </BadgerAccordionItem>
            <BadgerAccordionItem>
              <template slot="header">
                <div class="header__inner flex aic jcsb" @click="collapseValues.fifth = !collapseValues.fifth">
                  <p>Какую технику вы ремонтируете?</p>
                  <div class="icon">
                    <img v-if="!collapseValues.fifth" src="@/assets/icons/add-line.svg" alt="plus">
                    <img v-if="collapseValues.fifth" src="@/assets/icons/subtract-line.svg" alt="minus">
                  </div>
                </div>
              </template>
              <template slot="content">
                <div class="content__inner">
                  <ul>
                    <li>Стайлер</li>
                    <li>Сушилка для рук</li>
                    <li>Увлажнитель воздуха</li>
                    <li>Фен</li>
                    <li>Пылесос</li>
                    <li>Выпрямитель</li>
                  </ul>
                </div>
              </template>
            </BadgerAccordionItem>
          </BadgerAccordion>
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
    background-color:rgba(0, 0, 0, .8);
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
          font-size: 22px;

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

          p {
            line-height: 132%;
          }

          ul {
            li {
              position: relative;
              margin-bottom: 8px;
              padding-left: 32px;

              &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 10px;
                transform: translateY(-50%);
                display: block;
                height: 6px;
                width: 6px;
                background: #fff;
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
  }
}

</style>
