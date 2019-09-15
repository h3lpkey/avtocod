import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reports: [
      {
        id: 1,
        identifier: '4F2YU08102KM26251',
        type: 1,
        date: '26.05.2019 10:00:00',
        status: 1
      },
      {
        id: 2,
        identifier: 'A007AA197',
        type: 3,
        date: '26.05.2019 10:00:00',
        status: 2
      },
      {
        id: 3,
        identifier: 'XYZ12-3456789',
        type: 2,
        date: '26.05.2019 10:00:00',
        status: 3
      },
      {
        id: 4,
        identifier: '4F2YU08102KM26251',
        type: 1,
        date: '26.05.2019 10:00:00',
        status: 1
      },
      {
        id: 5,
        identifier: 'A007AA197',
        type: 3,
        date: '26.05.2019 10:00:00',
        status: 2
      },
      {
        id: 6,
        identifier: 'XYZ12-3456789',
        type: 2,
        date: '26.05.2019 10:00:00',
        status: 3
      },
      {
        id: 7,
        identifier: '4F2YU08102KM26251',
        type: 1,
        date: '26.05.2019 10:00:00',
        status: 1
      },
      {
        id: 8,
        identifier: 'A007AA197',
        type: 3,
        date: '26.05.2019 10:00:00',
        status: 2
      },
      {
        id: 9,
        identifier: 'XYZ12-3456789',
        type: 2,
        date: '26.05.2019 10:00:00',
        status: 3
      },
      {
        id: 10,
        identifier: '4F2YU08102KM26251',
        type: 1,
        date: '26.05.2019 10:00:00',
        status: 1
      },
      {
        id: 11,
        identifier: 'A007AA197',
        type: 3,
        date: '26.05.2019 10:00:00',
        status: 2
      },
      {
        id: 12,
        identifier: 'XYZ12-3456789',
        type: 2,
        date: '26.05.2019 10:00:00',
        status: 3
      }
    ],
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
      let record = {
        id: state.reports[state.reports.length - 1].id + 1,
        identifier: identifierReport,
        type: typeReport.id,
        date: moment(date).format('DD.MM.YYYY, h:mm:ss'),
        status: randomStatus.id
      }
      state.reports.push(record)
    }
  }
})
