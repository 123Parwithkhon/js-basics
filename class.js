// class Rectangle {
//   constructor(width, height){
//     this._width = width;
//     this._height = height;
//   }

//   get width(){
//     return this._width;
//   }

//   get height(){
//     return this._height;
//   }

//   get area(){
//     return this.width * this.height;
//   }

//   get perimeter(){
//     return 2 * (this.width + this.height);
//   }

//   set width(value){
//     if(value <= 0){
//       console.log("Ошибка: ширина должна быть положительным числом");
//       return;
//     }
//     this._width = value;
//   }

//   set height(value){
//     if(value <= 0){
//       console.log("Ошибка: высота должна быть положительным числом");
//       return;
//     }
//     this._height = value;
//   }

//   static isSquare(rectangle) {
//     if(rectangle.height === rectangle.width){
//       return true; 
//     }
//     return false;
//   }
// }

// const rect = new Rectangle(10, 5);
// console.log(rect.area);
// console.log(rect.perimeter);

// rect.width = -5
// console.log(rect.width);

// rect.width = 5;
// console.log(Rectangle.isSquare(rect));


// class Student{
//   constructor(name, grade){
//     this._name = name;
//     this._grades = [];
//   }

//   get name(){
//     return this._name;
//   }

//   get grade(){
//     return this._grades;
//   }

//   get average(){
//     if(this._grades.length === 0) return "Нет оценок";
//     const sum = this._grades.reduce((a, b) => a + b, 0);
//     return Math.round(sum / this._grades.length);
//   }

//   get status(){
//     if(this.average >= 90){
//       return `${this.average} - Отличник`;
//     }else if(this.average >= 70){
//       return `${this.average} - Хорошист`;
//     }else if(this.average >= 50){
//       return `${this.average} - Троечник`;
//     }else{
//       return `${this.average} - Неуспевающий`;
//     }
//   }

//   set name(value){
//     if(typeof value !== "string" || value.trim() === ""){
//       console.log("Ошибка: имя должно быть непустой строкой");
//       return;
//     }
//     this._name = value;
//   }

//   addGrade(grade){
//     if(typeof grade !== "number" || grade < 0 || grade > 100){
//       console.log("Ошибка: оценка должна быть числом от 0 до 100");
//       return;
//     }
//     this._grades.push(grade);
//   }

//   getInfo(){
//     console.log(`${this.name} | Средний балл: ${this.average} | ${this.status}`);
//   }

//   static best(student1, student2){
//     if(student1.average > student2.average){
//       return student1.name + `${student2.average} - лучший студент`;
//     }else if(student2.average > student1.average){
//       return student2.name + `${student2.average} - лучший студент`;
//     }else{
//       return "Оба студента имеют одинаковую среднюю оценку";
//     }
//   }
// }

// const alex = new Student("Алекс");
// alex.addGrade(90);
// alex.addGrade(92);
// alex.addGrade(85);
// alex.addGrade(150);

// console.log(alex.average);
// console.log(alex.status);
// console.log(alex.getInfo());

// const maria = new Student("Мария");
// maria.addGrade(95);
// maria.addGrade(98);

// console.log(Student.best(alex, maria));

class Task{
  constructor(id, title, _status = "todo"){
    this.id = id;
    this.title = title;
    this._status = _status;
  }

  get status(){
    return this._status;
  }

  set status(value){
    const validStatuses = ["todo", "in-progress", "done"];
    if(!validStatuses.includes(value)){
      console.log("Ошибка: недопустимый статус");
      return;
    }
    this._status = value;
  }

  getInfo(){
    return this._status === "done"
    ? `[✓] ${this.title}` : `[ ] ${this.title}`;
  }
}

class TodoList{
  constructor(){
    this._tasks = [];
    this._nextId = 1;
  }

  addTask(title){
    const task = new Task(this._nextId, title);
    this._nextId++;
    this._tasks.push(task);
  }

  complete(id){
    const task = this._tasks.find((t) => t.id === id);
    if(!task) return "Задача не найдена";
    task.status = "done";
  }

  remove(id){
    this._tasks = this._tasks.filter((t) => t.id !== id); 
  }

  getAll(){
    return this._tasks;
  }

  getByStatus(status){
    return this._tasks.filter((t) => t.status === status);
  }

  get stats(){
    return{
      total: this._tasks.length,
      done: this._tasks.filter((t) => t.status === "done").length,
      inProgress: this._tasks.filter((t) => t.status === "in-progress").length,
      todo: this._tasks.filter((t) => t.status === "todo").length,
    };
  }

  static create(){
    return new TodoList();
  }
}

const list = TodoList.create();
list.addTask("Изучить JavaScript");
list.addTask("Сделать домашнее задание");
list.addTask("Почитать книгу");

console.log(list.getAll());

list.complete(2);
console.log(list.getAll());

list.complete(3);
console.log(list.getAll());
list.getAll().forEach(task => {
  console.log(task.getInfo());
});
