<template>
  <div class="card card-report-table">
<!--    не понял почему >= работает, а <= нет-->
    <div v-if="reports >= 0">
      <h1 class="card-title">У вас нет отчётов</h1>
      <p>Создай отчёт, тогда покажу</p>
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
        <tr class="report-table-row" v-for="report in reports" v-bind:key="report.id">
          <td>{{report.identifier}}</td>
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
      return this.$store.state.reports
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
    }
  }
}
</script>
