# Выпадающий список с поиском

Задание «Работа с HTML-формами».

## Описание

Необходимо **дописать** удобное управление списком интересов для профиля пользователя.

![Demo](./demo.gif)

### Исходные данные

1. Основная HTML-разметка
2. Базовая CSS-разметка
3. Часть написанного кода JS

Реализация представляет собой HTML-обёртку над тегом _select_:

В существующей реализации необходимо доработать метод _getMatches_

```javascript
  getMatches( text ) {
    /*
      TODO: этот метод нужно дописать
      text - фраза, которую вводят в поле поиска
      Метод должен вернуть массив.

      Он формируется на основе списка опций select-элемента (this.input)
      Подходящие опции - те, чей текст содержит то, что есть в аргументе text
      Необходимо вернуть массив объектов со свойствами:
      {
        text: 'Содержимое <option>',
        value: 'Содержимое атрибута value'
      }
    */
    return [
      {
        text: 'Чубакка',
        value: '1'
      }
    ];
  }
```

В экземпляре класса _Autocomplete_ имеется свойство _input_, которое указывет
на тег _select_. Его необходимо использовать для обхода по всем опциям списка.

## Подсказки (спойлеры)

<details>
<summary>Используемые темы</summary>

1. Свойство _options_ тега _select_
2. Метод [_includes_](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

</details>

<details>
<summary>Советы</summary>

Для получения всех опций тега _select_ достаточно обратиться к _this.input.options_

</details>

### Процесс реализации

1. Допишите метод _getMatches_
2. Получайте удовольствие :)
