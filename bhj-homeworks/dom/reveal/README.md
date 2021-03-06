# Появление элементов при прокрутке

Задание «DOM».

## Описание

Необходимо реализовать механизм появления блоков в тот момент, когда прокрутка
дойдёт до них

![Demo](./demo.gif)

### Исходные данные

1. Основная HTML-разметка
2. Базовая CSS-разметка

Разметка элементов выглядит следующим образом:

```html
<div class="reveal">
  <!-- содержимое блока -->
</div>
```

Отображение блока осуществляется путём присовения класса _reveal_active_:

```html
<div class="reveal reveal_active">
  <!-- содержимое блока -->
</div>
```

### Процесс реализации

1. Отслеживайте изменение прокрутки окна
2. При изменении прокрутки, получите информацию о конкретном положении элемента
   с классом _reveal_.
3. При нахождении элемента в поле зрения, присвойте этому элементу класс _reveal_active_

## Подсказки (спойлеры)

<details>
<summary>Используемые темы</summary>

1. Событие _scroll_
2. Метод _getBoundingClientRect_

</details>

<details>
<summary>Советы</summary>

Обратите внимание, что при прокрутке возвращаемые координаты
_getBoundingClientRect()_ меняются

</details>
