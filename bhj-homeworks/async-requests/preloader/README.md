# Анимация загрузки данных

Задание «Асинхронные запросы».

## Описание

Необходимо написать загрузку курса валют.
К сожалению, страница отдаёт данные довольно медленно, поэтому нужно
реализовать анимацию загрузки результата.

![Demo](./demo.gif)

### Исходные данные

1. Основная HTML-разметка
2. Базовая CSS-разметка

На странице есть изображение анимации загрузки:

```html
<img id="loader" class="loader loader_active" src="https://i.postimg.cc/66SGMVs5/mcru-ajax-loader.gif" />
```

У элемента есть класс _loader_active_, при котором элемент показывается на странице
(без него элемент будет скрыт).

Все данные о курсе валют необходимо подгрузить в элемент _#items_

Стандартный HTML-шаблон для валюты:

```html
<div class="item__code">USD</div>
<div class="item__value">32</div>
<div class="item__currency">руб.</div>
```

Для загрузки данных о курсе валют, необходимо отправить GET-запрос по адресу:
*https://netology-slow-rest.herokuapp.com*

Данные приходят в формате JSON. Пример ответа:

```json
{
  "date": "2019-02-18 14:30:56",
  "response": {
    "Date": "2019-02-19T11:30:00+03:00",
    "PreviousDate": "2019-02-16T11:30:00+03:00",
    "PreviousURL": "//www.cbr-xml-daily.ru/archive/2019/02/16/daily_json.js",
    "Timestamp": "2019-02-18T17:00:00+03:00",
    "Valute": {
      "AUD": {
        "ID": "R01010",
        "NumCode": "036",
        "CharCode": "AUD",
        "Nominal": 1,
        "Name": "Австралийский доллар",
        "Value": 47.3467,
        "Previous": 47.2801
      },
      "AZN": {
        "ID": "R01020A",
        "NumCode": "944",
        "CharCode": "AZN",
        "Nominal": 1,
        "Name": "Азербайджанский манат",
        "Value": 39.0492,
        "Previous": 39.3188
      }
    }
  }
}
```

В данном примере в _.item\_\_code_ нужно подгрузить значение свойства _CharCode_,
в _.item\_\_value_ - _Value_

### Процесс реализации

1. Загрузите данные о курсе валют, отправив GET-запрос
   по адресу *https://netology-slow-rest.herokuapp.com*
2. По факту загрузки скройте анимацию загрузки

### Повышенный уровень сложности (не обязательно)

Сделайте кэширование данных. При повторном посещении страницы выдавайте данные
прошлого запроса и обновляйте их по получению данных со страницы.

В будущих лекциях мы будем касаться локального хранилища (localStorage).
Для решения этой задачи, вам потребуется познакомиться с темой уже сейчас.

Материалы для изучения:

1. [Window.localStorage](https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage)
2. [LocalStorage на пальцах](https://tproger.ru/articles/localstorage/)