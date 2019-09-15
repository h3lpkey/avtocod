<template>
  <div class="card card-report-table">
    <!-- todo: не понял почему >= работает, а <= нет-->
    <div v-if="reports >= 0">
      <h1 class="card-title">У вас нет отчётов</h1>
      <p>Создай отчёт, или тыкни кнопку ниже</p>
      <button class="btn btn__yellow"
              v-on:click="setDefaultReports">Вставить тестовые данные
      </button>
    </div>
    <div v-else>
      <h1 class="card-title">Все отчёты</h1>
      <table class="report-table">
        <tr class="report-table-header">
          <th>Идентификатор</th>
          <th>Тип идентификатора</th>
          <th>Дата</th>
          <th>Статус</th>
          <th></th>
        </tr>
        <transition-group tag="tbody" name="fade" mode="out-in">
          <tr class="report-table-row"
              v-for="report in reports"
              v-bind:key="report.id">
            <td class="identifier">{{report.identifier}}</td>
            <td class="type">{{reportType(report.type)}}</td>
            <td class="date">{{report.date}}</td>
            <td>
              <div :class="'status status__' + reportStatus(report.status)">
                {{reportStatus(report.status)}}
              </div>
            </td>
            <td class="icon-box" v-on:click="removeReport(report)">
              <span class="icon icon-trash"></span>
            </td>
          </tr>
        </transition-group>
      </table>
    </div>
  </div>
</template>

<script>
import './_tableRecord.scss'

export default {
  props: {},
  computed: {
    reports () {
      let data = this.$store.state.reports
      data.sort(function (a, b) {
        return b.id - a.id
      })
      return data
    }
  },
  methods: {
    reportStatus (statusId) {
      return this.$store.state.statusReports.find((item) => {
        if (item.id === statusId) {
          return item['status']
        }
      }).status
    },
    reportType (typeId) {
      return this.$store.state.typeReports.find((item) => {
        if (item.id === typeId) {
          return item
        }
      }).name
    },
    removeReport (report) {
      if (confirm('RLY?')) {
        this.$store.commit('removeReport', report)
      }
    },
    setDefaultReports () {
      this.$store.commit('setDefaultReports')
    }
  }
}
</script>
