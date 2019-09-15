<template>
  <div class="card card-report">
    <h1 class="card-title">Создать отчёт</h1>
    <div class="card-report-content">
      <div class="input-box">
        <label class="label" for="identifier">Идентификатор</label>
        <input class="input" type="text" id="identifier" placeholder="A007AA197"/>
      </div>
      <div class="input-box">
        <label class="label" for="identifier-type">Тип идентификатора</label>
        <div class="input-drop">
          <div class="input input-drop--result"
               v-on:click="showTypesTable"
               id="identifier-type">{{type}}
            <span class="triangle"></span>
          </div>
          <transition name="fade" mode="out-in">
            <ul class="input-items" v-show="showTypes">
              <li class="input-item"
                  v-on:click="setType(type)"
                  v-for="type in types" v-bind:key="type.id">
                {{type.name}}
              </li>
            </ul>
          </transition>
        </div>
      </div>
      <button class="btn btn__yellow">Создать</button>
    </div>
  </div>
</template>

<script>
import './_createRecord.scss'
export default {
  props: {},
  data: function () {
    return {
      showTypes: false,
      type: 'ГРЗ',
      types: [
        {
          id: 1,
          name: 'ГРЗ'
        },
        {
          id: 2,
          name: 'VIN'
        },
        {
          id: 3,
          name: 'BODY'
        }
      ]
    }
  },
  methods: {
    showTypesTable: function () {
      this.showTypes = true
    },
    setType: function (type) {
      this.type = type.name
      this.showTypes = false
    }
  }
}
</script>
