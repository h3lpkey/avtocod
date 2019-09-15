import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import createPersistedState from 'vuex-persistedstate'
import defaultReports from './defaultReports'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    reports: defaultReports,
    typeReports: [
      {
        id: 1,
        name: 'VIN'
      },
      {
        id: 2,
        name: 'BODY'
      },
      {
        id: 3,
        name: 'ГРЗ'
      }
    ],
    statusReports: [
      {
        id: 1,
        status: 'error'
      },
      {
        id: 2,
        status: 'progress'
      },
      {
        id: 3,
        status: 'done'
      }
    ]
  },
  mutations: {
    removeReport (state, report) {
      state.reports.splice(state.reports.indexOf(report), 1)
    },
    addReport (state, { identifier: identifierReport, type: typeReport }) {
      let date = Date.now()
      let randomStatus = state.statusReports[Math.floor((Math.random() * state.statusReports.length))]
      let id = 0
      state.reports.forEach((item) => {
        if (item.id > id) {
          id = item.id + 1
        }
      })
      let record = {
        id: id,
        identifier: identifierReport,
        type: typeReport.id,
        date: moment(date).format('DD.MM.YYYY h:mm:ss'),
        status: randomStatus.id
      }
      state.reports.push(record)
    },
    setDefaultReports (state) {
      // todo: почему отрабатывает только после релоуда страницы?
      state.reports = defaultReports
    }
  }
})
