<template>
  <div class="card card-report">
    <h1 class="card-title">Создать отчёт</h1>
    <div class="card-report-content">
      <div class="input-box">
        <label class="label" for="identifier">Идентификатор</label>
        <input class="input"
               v-bind:class="{ input__error: errorShow }"
               type="text"
               id="identifier"
               v-model="identifier"
               v-on:change="errorShow = false"
               placeholder="A007AA197"/>
      </div>
      <div class="input-box">
        <label class="label" for="identifier-type">Тип идентификатора</label>
        <div class="input-drop">
          <div class="input input-drop--result"
               v-on:click="showTypesTable"
               id="identifier-type">{{type.name}}
            <span class="triangle"></span>
          </div>
          <transition name="fade" mode="out-in">
            <ul class="input-items" v-show="showTypes">
              <li class="input-item"
                  v-on:click="setType(type)"
                  v-for="type in typesReports" v-bind:key="type.id">
                {{type.name}}
              </li>
            </ul>
          </transition>
        </div>
      </div>
      <button v-on:click="createRecord"
              class="btn btn__yellow">Создать</button>
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
      identifier: '',
      errorShow: false,
      type: {}
    }
  },
  computed: {
    typesReports: function () {
      return this.$store.state.typeReports
    },
    identifierCorrect: function () {
      // for regular
      if (this.identifier) {
        let string = this.identifier
        let regexp = ''
        switch (this.type.name) {
          case 'VIN':
            regexp = /\b[(A-H|J-N|P|R-Z|0-9)]{17}\b/
            break
          case 'BODY':
            regexp = /^[A-Za-z0-9- ]{7,15}$/m
            break
          case 'ГРЗ':
            regexp = /^[^АВЕКМНОРСТУХ]{1}[0-9]{3}[^АВЕКМНОРСТУХ]{2}[0-9]{2,3}$/
            break
        }
        let result = regexp.exec(string)
        if (result) {
          return true
        } else {
          this.errorShow = true
          return false
        }
      } else {
        return false
      }
    }
  },
  methods: {
    showTypesTable: function () {
      this.showTypes = true
    },
    setType: function (type) {
      this.type = type
      this.showTypes = false
    },
    createRecord: function () {
      if (this.identifierCorrect) {
        this.$store.commit('addReport', { identifier: this.identifier, type: this.type })
        this.errorShow = false
        this.identifier = ''
        this.type = {}
      } else {
        this.errorShow = true
      }
    }
  }
}
</script>
