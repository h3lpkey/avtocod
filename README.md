# avtocod

Тестовое задание для [avtocod](https://avtocod.ru/), само задание 
[тут](https://github.com/avtocod/frontend-developer-test-task),
 а потыкать его можно [тут](https://h3lpkey.github.io/avtocod/)

План разработки составил следующий:
- [x] иницилизация и подключение (vue, vue-router, vuex, eslint)
- [x] роутер двух страниц
- [x] вёрстка двух страниц с фигмы
- [x] авторизация и выход
    - [x] просроченная авторизация (24 часа)
    - [ ] перенести логин и пароль в отдельный файл
    - [ ] методы Login Logout в 'правильное место'
- [x] делим вёрстку на компоненты
    - [x] меню
    - [x] создать отчёт
    - [x] таблица отчётов
- [x] создание отчёта (случайно) и удаление отчёта
    - [x] *переспросить за удаление
    - [x] *дефолтные отчёты (localStorage)
    - [ ] *валидация формы
- [x] *выгрузка на гит пагец
- [ ] *докер
- [ ] *тесты

> *Звёздочкой пометил задания которые не обязательны к выполнению, но хотелось бы реализовать

## Развернуть у себя можно вот так
```bash
git clone https://github.com/h3lpkey/avtocod.git ./test-task && cd $_
yarn install && yarn serve
```

## По ощущениям :suspect:
Безумно приятно писать на `vuejs`, задание подарило много вопросов. Классное тестовое
 
проблем было предостаточно:
* не разобрался как правильно делать `import scss` файлов для компонентов через webpack
* оставил 2 todo 
* комплектация корневых компонентов кажется сумборной и несамодостаточной
* методы для авторизации и выхода точно должны выглядеть как-то иначе
* не понял как правильно прописать путь к `assets` для `svg` и тп
