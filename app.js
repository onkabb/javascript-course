// 1. Функции
// Function Declaration
// function greet(name) {
//   console.log('Привет ', name)
// }

// Function Expression
// const greet2 = function greet2(name) {
//   console.log('Привет 2 ', name)
// }

// greet('Саня')
// greet2('Саня2')

// console.log(typeof greet)
// console.dir(greet)

// 2. Анонимные функции
// let counter = 0
// const interval = setInterval(function() {
//   if (counter === 10) {
//     clearInterval(interval) // clearTimeout
//   } else {
//     console.log(++counter)
//   }
// }, 100)

// 3. Стрелочные функции
function greet() {
  console.log("Привет ");
}

const arrow = (name, age) => {
  console.log("Привет ", name, age);
};

const arrow2 = (name) => console.log("Привет - ", name);

const pow2 = (num) => num ** 2;

// 4. Параметры по умолчанию
const sum = (a = 322, b = 100) => a + b;

console.log(sum(11));
console.log(sum());

function sumAll(...args) {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
}
console.log(sumAll(1, 2, 4, 5, 6));

// 5. Замыкание

function createMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  };
}

const member = createMember("ilya");
console.log(member);
console.log(member("shalaev"));
