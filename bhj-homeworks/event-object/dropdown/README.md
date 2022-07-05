# Выпадающие списки

Задание «Объект события».

## Описание

Необходимо создать управление кнопкой с прикреплённым к ней выпадающим списком

![Demo](./demo.gif)

### Исходные данные

1. Основная HTML-разметка
2. Базовая CSS-разметка

Базовая разметка кнопки представлена следующим кодом:

```html
<div class="dropdown">
  <div class="dropdown__value">JavaScript</div>
  <ul class="dropdown__list">
    <li class="dropdown__item">
      <a href="" class="dropdown__link"> JavaScript </a>
    </li>
    <li class="dropdown__item">
      <a href="" class="dropdown__link"> PHP </a>
    </li>
    <li class="dropdown__item">
      <a href="" class="dropdown__link"> Python </a>
    </li>
    <li class="dropdown__item">
      <a href="" class="dropdown__link"> Fortran </a>
    </li>
  </ul>
</div>
```

В элементе с классом _dropdown\_\_value_ содержится выбранное значение.

Для того, чтобы открыть меню, требуется проставить класс _dropdown\_\_list_active_:

```html
<ul class="dropdown__list dropdown__list_active"></ul>
```

Нажатие на элемент с классом _dropdown\_\_item_ при открытом списке должно:

1. Закрывать список
2. Устанавливать новое значение в элемент с классом _dropdown\_\_value_

### Процесс реализации

1. Сделайте сворачивание/разворачивание списка по нажатию на кнопку
2. Сделайте замену значения по выбору соответствующего пункта меню
3. Предусмотрите случай, когда на странице может одновременно находиться несколько
   таких кнопок
4. Не забывайте запрещать переход по ссылке

## Подсказки (спойлеры)

<details>
<summary>Используемые темы</summary>

1. Событие _click_, метод _addEventListener_, обработчик события
2. Свойство _textContent_
3. Метод Array.from() или оператор распространения (spread, «...») для удобной
   навигации по найденным элементам
4. Метод _closest_

</details>
