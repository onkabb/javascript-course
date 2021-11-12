// 1. Перемнные
var name = "Ilya"; // устаревший вариант
//const lastName = "Shalaev"; // использовать предпочтительно
let age = 23; //number
console.log(name);

name = "Vlad"; //string

console.log(name);

const isProgrammer = true; //boolean

const _private = "private"; //валидно
const $ = "$"; //валидно

const withNum5 = "5"; //валидно

// 2. Мутирование.
console.log("Имя человека: " + name + ". Возраст: " + age + ".");

//const lastName = prompt("Напиши фамилию");
//alert(name + " " + lastName);

// 3. Операторы
let currentYear = 2021;
const birstYear = 1998;

const age2 = currentYear - birstYear;
console.log(age2);

const a = 10;
const b = 5;

let c = 32;
c = c + a;
c = c - a;
c = c * a;
c = c / a;
c += a;
c -= a;
c *= a;
c /= a;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(++currentYear);
console.log(--currentYear);
console.log(c);

// 4. Типы данных.
const isProg = true;
const firstName = "Ilya";
const age3 = 26;
let x;
console.log(typeof isProg);
console.log(typeof firstName);
console.log(typeof age3);
console.log(x);
console.log(typeof x);
console.log(typeof null);
console.log(typeof true);

// 5. Приоретет операторов
const fullAge = 26;

// > < >= <= == === != !===
const isFullAge = currentYear - birstYear >= fullAge;
console.log(isFullAge);

// 6. Условные операторы
const courseStatus = "pending"; //ready, fail, pending

if (courseStatus === "ready") {
  console.log("Курс уже готов");
} else if (courseStatus === "pending") {
  console.log("Курс еще в разработке");
} else {
  console.log("Курс зафейлил");
}

const num1 = 42; //number
const num2 = "42"; //str

console.log(num1 == num2); // здесь происходит неявное приведение типов

console.log(num1 === num2);

const isReady = true;

if (isReady) console.log("Готово");

isReady ? console.log("Готово") : console.log("Не готово"); // тернарный оператор

// 7. Булеваяа логика

// 8. Функции
function calculateAge(year) {
  return 2021 - year;
}

function logInfoAbout(name, year) {
  const age = calculateAge(year);

  if (age > 0) {
    console.log("Имя: " + name + " Возраст: " + age);
  } else {
    console.log("Так то это уже будущее");
  }
}

console.log(calculateAge(1998));
logInfoAbout("Вася", 2005);
logInfoAbout("Вася", 20055);

// 9. Массивы
const cars = ["Mazda", "Mersedes", "Ford"];
console.log(cars);
console.log(cars[1]);
console.log(cars.length);

cars[0] = "Porsche";
console.log(cars);

// 10. Циклы

for (let index = 0; index < cars.length; index++) {
  console.log(cars[index]);
}

for (const car of cars) {
  console.log(car);
}

// 11. Объекты
const person = {
  firstName: "Ilya",
  lastName: "Shalaev",
  age: 23,
  lang: ["ru", "en"],
  greet: function () {
    console.log("greet");
  },
};

console.log(person.firstName);
console.log(person["lastName"]);
person.greet();
person.hasWife = true;
console.log(person);
