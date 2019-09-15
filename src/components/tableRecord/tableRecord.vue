<template>
  <div class="card card-report-table">
    <h1 class="card-title">Все отчёты</h1>
    <table class="report-table">
      <tr class="report-table-header">
        <th>Идентификатор</th>
        <th>Тип идентификатора</th>
        <th>Дата</th>
        <th>Статус</th>
        <th></th>
      </tr>
      <tr class="report-table-row">
        <td>4F2YU08102KM26251</td>
        <td>VIN</td>
        <td>26.05.2019 10:00:00</td>
        <td>
          <div class="status status__error">ERROR</div>
        </td>
        <td class="icon-box""><span class="icon icon-trash"></span></td>
      </tr>
    </table>
  </div>
</template>

<script>
import './_tableRecord.scss'
export default {
  props: {}
}
</script>
