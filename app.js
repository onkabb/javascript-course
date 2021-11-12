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

// 2. Типы данных. Мутирование.
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
