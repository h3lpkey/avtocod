<template>
  <div class="Main">
    <nav class="menu">
      <p class="title">Demo application</p>
      <ul class="menu-items">
        <li class="menu-item menu-item__active">
          <span class="icon icon-record"></span>
          <a href="#">Список отчётов</a>
        </li>
        <li class="menu-item">
          <span class="icon icon-quit"></span>
          <a href="#">Выход</a>
        </li>
      </ul>
    </nav>
    <div class="content">
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
                      v-for="type in types" v-bind:key="type">
                    {{type.name}}
                  </li>
                </ul>
              </transition>
            </div>
          </div>
          <button class="btn btn__yellow">Создать</button>
        </div>
      </div>
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
            <td class="icon-box"><span class="icon icon-trash"></span></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data: function () {
    return {
      showTypes: false,
      type: 'ГРЗ',
      types: [
        {
          name: 'ГРЗ'
        },
        {
          name: 'VIN'
        },
        {
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

<style lang="scss">

  .fade-enter-active, .fade-leave-active {
    transition: opacity 200ms;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .btn {
    height: 40px;
    border-radius: 50px;
    border: none;
    padding: 9px 45px;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.3px;
    transition: 200ms;
    margin-top: 20px;

    &__yellow {
      background: #FFD306;
      color: #000000;
    }

    &:focus {
      outline: 0;
    }

    &:hover {
      cursor: pointer;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  .Main {
    display: flex;
    flex-direction: row;
    height: 100vh;
    background-color: #F7F8FC;

    .menu {
      width: 215px;
      font-weight: bold;
      font-size: 19px;
      line-height: 24px;
      letter-spacing: 0.4px;
      color: #FFFFFF;
      background-color: #067EFF;
      position: fixed;
      height: 100%;

      @media (max-width: 550px) {
        width: unset;
        min-width: 35px;
      }

      .title {
        margin: 40px 0;
        text-align: center;

        @media (max-width: 550px) {
          display: none;
        }
      }

      .menu-items {
        list-style: none;
        padding: 0;

        .menu-item {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.2px;
          padding: 18px 30px;
          cursor: pointer;

          @media (max-width: 550px) {
            padding: 0;
            height: 56px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .icon {
            display: none;
            width: 24px;
            height: 24px;
            @media (max-width: 550px) {
              display: flex;
            }

            &-record {
              background-image: url("assets/menu.svg");
            }

            &-quit {
              background-image: url("assets/exit.svg");
            }
          }

          a {
            color: #000000;
            text-decoration: none;
            @media (max-width: 550px) {
              display: none;
            }
          }

          &__active {
            background: #FFD306;
            border-left: 3px solid black;
            padding-left: 27px;
            @media (max-width: 550px) {
              padding: 0;
            }
          }
        }
      }
    }

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

      .card-report-content {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        flex-wrap: wrap;

        @media (max-width: 550px) {
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }

        .input-box {
          display: flex;
          flex-direction: column;
          width: 270px;
          margin-right: 30px;
          padding-top: 20px;

          @media (max-width: 700px) {
            margin-right: 0;
          }
          @media (max-width: 550px) {
            width: 220px;
          }

          .label {
            font-weight: bold;
            font-size: 14px;
            line-height: 18px;
            letter-spacing: 0.3px;
            color: #000000;
            margin-bottom: 7px;
          }

          .input {

            height: 40px;
            border: 2px solid #CECECE;
            box-sizing: border-box;
            border-radius: 10px;
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 0.3px;
            padding: 0 15px;
            transition: 200ms;

            &-drop--result {
              display: flex;
              justify-content: space-between;
              align-items: center;
              cursor: pointer;

              .triangle {
                width: 22px;
                height: 18px;
                transition: 200ms;
                background-image: url("assets/array_bot.svg");
              }

              &:hover .triangle {
                background-image: url("assets/array_bot__blue.svg");
              }
            }

            &::placeholder {
              font-size: 20px;
              line-height: 30px;
              letter-spacing: 0.3px;
              color: #D0D0D1;
            }

            &:focus {
              outline: 0;
              border-color: #409CFF;
            }
          }

          .input-drop {
            position: relative;

            .input-items {
              padding: 0;
              margin: 0;
              position: absolute;
              top: 0;
              width: 100%;
              list-style: none;
              border: 2px solid #CECECE;
              box-sizing: border-box;
              border-radius: 10px;
              font-size: 20px;
              transition: 200ms;

              .input-item {
                height: 40px;
                display: flex;
                align-items: center;
                background-color: #fff;
                padding: 0 15px;
                cursor: pointer;
                transition: 200ms;

                &:first-child {
                  border-top-left-radius: 7px;
                  border-top-right-radius: 7px;
                }

                &:last-child {
                  border-bottom-left-radius: 7px;
                  border-bottom-right-radius: 7px;
                }

                &:hover {
                  background-color: #FFD306;
                }
              }
            }
          }
        }
      }

      .card-report-table {
        .report-table {
          width: 100%;
          margin-top: 20px;
          border-collapse: collapse;

          .report-table-header {
            height: 30px;
            @media (max-width: 850px) {
              display: none;
            }

            th {
              text-align: left;
              font-weight: bold;
              font-size: 14px;
              line-height: 18px;
              letter-spacing: 0.2px;
              color: #000000;
            }
          }

          .report-table-row {
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.2px;
            color: #252733;
            cursor: pointer;
            height: 50px;
            border-top: 1px solid #DFE0EB;
            transition: 200ms;

            td {
              @media (max-width: 850px) {
                padding: 7px;
              }
            }

            @media (max-width: 850px) {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              height: unset;
              padding: 15px;
            }

            &:last-child {
              border-bottom: 1px solid #DFE0EB;
            }

            &:hover {
              background-color: #F7F8FF;
            }

            .status {
              padding: 5px 10px;
              width: 90px;
              border-radius: 100px;
              text-align: center;
              color: #fff;

              &__error {
                background-color: #F12B2C;
              }

              &__progress {
                background-color: #F1A22B;
              }

              &__done {
                background-color: #29CC97;
              }
            }

            .icon-box {
              display: flex;
              justify-content: center;
              align-items: center;

              .icon-trash {
                cursor: pointer;
                width: 24px;
                height: 24px;
                background-image: url("assets/trash.svg");
              }
            }
          }
        }
      }
    }
  }
</style>
