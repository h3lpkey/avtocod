<template>
  <div class="Main">
    <Menu></Menu>
    <div class="content">
      <CreateRecord></CreateRecord>
      <TableRecord></TableRecord>
    </div>
  </div>
</template>

<script>
import Menu from './components/menu/menu.vue'
import CreateRecord from './components/createRecord/createRecord.vue'
import TableRecord from './components/tableRecord/tableRecord.vue'

export default {
  props: {},
  components: {
    Menu,
    CreateRecord,
    TableRecord
  }
}
</script>

<style lang="scss">

  .fade-enter-active, .fade-leave-active {
    transition: opacity 200ms;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .Main {
    display: flex;
    flex-direction: row;
    height: 100vh;
    background-color: #F7F8FC;

    .content {
      width: calc(100% - 245px);
      margin-left: auto;
      padding: 25px 15px;
      @media (max-width: 550px) {
        width: calc(100% - 65px);
      }

      .card {
        background: #FFFFFF;
        border: 1px solid #DFE0EB;
        box-sizing: border-box;
        border-radius: 8px;
        margin-bottom: 25px;
        padding: 25px 15px;

        @media (max-width: 550px) {
          padding: 25px 0;
        }

        .card-title {
          font-weight: bold;
          font-size: 24px;
          line-height: 30px;
          letter-spacing: 0.3px;
          color: #252733;
          margin: 0;

          @media (max-width: 550px) {
            text-align: center;
          }
        }
      }
    }
  }
</style>
