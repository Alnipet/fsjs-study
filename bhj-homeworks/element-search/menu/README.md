# Навигационное меню

Задание «Способы поиска нужного HTML-элемента».

## Описание

Необходимо реализовать двухуровневое навигационное меню.
При клике на пункт должны открываться подразделы

![Demo](./demo.gif)

### Исходные данные

1. Основная HTML-разметка
2. Базовые CSS-стили

Пункты меню представлены кодом:

```html
<li class="menu__item">
  <a href="https://netology.ru/" class="menu__link">Главная</a>
</li>
```

Те, которые имеют вложенное меню:

```html
<li class="menu__item">
  <a href="" class="menu__link">О компании</a>
  <ul class="menu menu_sub">
    <li class="menu__item">
      <a href="https://netology.ru/clients" class="menu__link">Клиенты</a>
    </li>
    <li class="menu__item">
      <a href="https://netology.ru/service" class="menu__link">Обслуживание</a>
    </li>
    <li class="menu__item">
      <a href="https://netology.ru/wearecool" class="menu__link">Награды</a>
    </li>
  </ul>
</li>
```

Для показа вложенного меню, вам необходимо поставить класс _menu_active_ вот так:

```html
<ul class="menu menu_sub menu_active">
  <!-- ... -->
</ul>
```

### Процесс реализации

1. Используя цикл зарегистрируйте обработчики события _click_ на элементах с классом _menu\_\_link_
2. Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс _menu_active_
3. Запрещайте переход по ссылке для тех, что имеют вложенное меню. Остальные
   пункты меню должны без помех переводить пользователя на соответствующие страницы.

_В решении необходимо использовать методы, изученные на занятии,
работы с ручной подстановкой индексов массива приниматься не будут.
Необходимые методы указаны в "Подсказках"_

### Повышенный уровень сложности (не обязательно)

1. Одновременно не должно быть открыто более одного вложенного меню. Все остальные
   должны быть скрыты
2. Напишите код для случая, когда на странице может быть более 1 навигационного меню.

![Extended Demo](./extended-demo.gif)

## Подсказки (спойлеры)

<details>
<summary>Используемые темы</summary>

1. Событие _click_, метод _onclick_, обработчик события
2. Предотвращение действия по умолчанию (_return false_ в обработчике события)
3. Метод _closest_
4. Методы _querySelector_ и _querySelectorAll_
5. Метод Array.from() или оператор распространения (spread, «...») для удобной
   навигации по найденным элементам

</details>

<details>
<summary>Советы</summary>

1. С помощью методов [_closest_](https://developer.mozilla.org/ru/docs/Web/API/Element/closest),
   [_querySelector_](https://developer.mozilla.org/ru/docs/Web/API/Element/querySelector)
   и [_querySelectorAll_](https://developer.mozilla.org/ru/docs/Web/API/Element/querySelectorAll)
   вы можете найти все подходящие элементы 1. _closest_ позволит найти ближайшего родителя по CSS-селектору 2. _querySelector_ позволит найти **первый** дочерний элемент по CSS-селектору 3. _querySelectorAll_ позволит найти **все** дочерние элемент по CSS-селектору
2. Для вложенных меню вы обязаны возвращать _false_ в обработчиках события для
   предотвращения перехода по ссылке.

</details>
