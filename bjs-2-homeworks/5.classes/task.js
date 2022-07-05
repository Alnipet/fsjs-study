class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = 1.5 * this.state;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(...args) {
    super(...args);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(...args) {
    super(...args);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(...args) {
    super(...args);
    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = String(name);
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book
      }
    }
    return null
  }

  giveBookByName(bookName) {
    const searchedBook = this.findBookBy('name', bookName);

    if (searchedBook) {
      this.books = this.books.filter((elem) => {
        if (elem !== searchedBook) {
          return true
        }
      })
      return searchedBook
    } else {
      return null
    }
  }
}


// Задача №3 (со звездочкой)
class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  addMark(mark, subjectName) {
    if (mark > 0 && mark < 6) {
      if (this.marks === undefined) {
        this.marks = {};
        this.marks[subjectName] = [mark];
      } else {
        if (subjectName in this.marks) {
          this.marks[subjectName].push(mark);
        } else {
          this.marks[subjectName] = [mark];
        }
      }
    } else {
      return console.error("Ошибка, оценка должна быть числом от 1 до 5");
    }

    return this.marks
  }

  getAverageBySubject(subjectName) {
    let sumSubjectMarks = 0;
    this.marks[subjectName].forEach((mark) => sumSubjectMarks += mark);

    return sumSubjectMarks / this.marks[subjectName].length
  }

  getAverage() {
    let sumAllMarks = 0;
    let countAllMarks = 0;

    Object.values(this.marks).forEach((elem) => elem.forEach((mark) => {
      sumAllMarks += mark;
      countAllMarks++;
    }))

    return sumAllMarks / countAllMarks
  }

  exclude(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
}