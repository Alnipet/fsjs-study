class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error ('Нет id');
    }
    else if (this.alarmCollection.some((item) => item.id === id)) {
        console.error('Такой будильник есть');
      }
    else {
      return this.alarmCollection.push({
        time,
        callback,
        id
      })
    }
  }

  removeClock(id) {
    const afterRemoveAlarmCollection = this.alarmCollection.filter((item) => item.id !== id);

    if (afterRemoveAlarmCollection.length < this.alarmCollection.length) {
      this.alarmCollection = afterRemoveAlarmCollection;
      return true
    }
    else {
      return false
    }
  }

  getCurrentFormattedTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const intoTwoDigits = function (num) {
      if (num < 10) {
        return '0' + num.toString();
      }
      else {
        return num.toString();
      }
    }
    return `${intoTwoDigits(hours)}:${intoTwoDigits(minutes)}`;
  }

  start() {
    const checkClock = () => {
      this.alarmCollection.forEach((item) => {
        if (item.time === this.getCurrentFormattedTime()) {
          item.callback();
        }
      })
    }

    if (this.timerId === null) {
      this.timerId = setInterval(checkClock, 1000);
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach((item) => console.log(`id: ${item.id}, time: ${item.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];

  }
}