# «Асинхронность»

## Задача №1. Будильник-колыбельная

Помогите старому знакомому Васе (он уже студент 1 курса, кстати) перестать просыпать на пары.
Для этого нужно написать Программу-будильник-колыбельную с возможностью добавления, удаления, запусков и остановки звонков.

## Процесс реализации

1. Необходимо написать класс _AlarmClock_ со следующими методами:

- `constructor` - выделяет память для объекта.

  - Создайте свойство для хранения коллекции звонков `alarmCollection` с начальным значением пустого массива.
  - Создайте свойство `timerId` для хранения `id` таймера без начального значения.

- `addClock` - добавляет новый звонок в коллекцию существующих.

  - Принимает параметр времени в формате `HH:MM` - время, когда должно запуститься действие.
  - Принимает параметр функции-колбека - действие, которое должно запуститься.
  - Принимает параметр идентификатора создаваемого звонка.
  - Проверьте, передан ли параметр `id`. Если параметр не передан, выполните выброс ошибки (с помощью `throw new Error('error text')`).
  - Проверьте, есть ли какой-нибудь звонок с уже существующим `id`. Если есть, выведите ошибку (с помощью `console.error()`) и завершите выполнение метода. Программа должна продолжать работать, но звонок не должен быть добавлен.
  - Перед завершением метода добавьте в массив звонков объект со свойствами `id`, `time`, `callback`.

- `removeClock` - удаляет определённый звонок.

  - Принимает `id` звонка, который следует удалить.
  - Удалите из массива звонков тот, у которого `id` совпадает с текущим. Например, можно использовать метод `filter`.
  - Верните логическое значение об успешности/провале удаления объекта звонка из общего массива.

- `getCurrentFormattedTime` - возвращает текущее время в строковом формате `HH:MM`.

- `start` - запускает все звонки

  - Создайте функцию проверки (`checkClock`), которая принимает звонок и проверяет: если текущее время совпадает со временем звонка, то вызывайте колбек.
  - Если значение идентификатора текущего таймера отсутствует, то создайте новый интервал.
  - В этом интервале реализуйте функцию, которая будет перебирать все звонки, и для каждого вызывать функцию `checkClock`.
  - Результат функции `setInterval` сохраните в свойстве идентификатора текущего таймера.

- `stop` - останавливает выполнение всех звонков

  - Сделайте проверку существования идентификатора текущего таймера.
  - Если у идентификатора текущего таймера есть значение, то вызовите функцию `clearInterval` для удаления интервала, а так же удалите значение из свойства "идентификатор текущего таймера".

- `printAlarms` - печатает все звонки

  - С помощью метода `forEach` выведите информацию о каждом звонке (`id` и `time`).

- `clearAlarms` - удаляет все звонки
  - Вызывает метод остановки интервала.
  - Удаляет все звонки.

2. Напишите пример использования класса _AlarmClock_ (реализуйте и запустите функцию `testCase`):

- Создайте объект класса `AlarmClock`.

- Добавьте в созданный объект новый звонок с текущим временем и колбеком вывода текста на консоль. Так, чтобы после запуска, функция вывода _выполнилась несколько раз_.

- Добавьте ещё один звонок со временем +1 минуты от текущего времени и колбеком: вывода текста на консоль, а так же удалением этого звонка. Так, чтобы после запуска функция вывода _выполнилась один раз, а потом удалилась_.

- Добавьте ещё один звонок со временем +2 минут от текущего времени и колбеком: вывода текста на консоль, а так же остановки всех звонков, очистки всех звонков и выводом всех звонков. Так, чтобы после запуска функция вывода _выполнилась один раз, потом остановился интервал, все звонки очистились, и ничего не вывелось_.

- Напечатайте все звонки (должно вывестись 3 звонка).

- Запустите выполнение ваших звонков.

Результат работы должен быть примерно таким (код выполнялся по командам из консоли):

![](https://sun1-24.userapi.com/4e78x8Gim59SbBdHgqnEpIbGJiUkjbFP0dhT9A/bLPY-cmewxY.jpg)

### Критерии выполнения

1. Старайтесь избегать циклов. Задание можно реализовать без них. Вместо циклов используйте _функции высшего порядка_, изученные ранее.
2. Функция `testCase` может отличаться от описания в задании. Главное показать:
   - Создание объекта звонков;
   - Добавление нескольких звонков;
   - Удаление звонков в зависимости от условия;
   - Печать звонков перед удалением и после (для доказательства того, что звонки действительно добавляются и удаляются);
   - Запуск звонков и **срабатывание в нужное время**;
   - Остановка звонков.
