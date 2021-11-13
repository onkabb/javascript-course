const cars = ["Мазда", "Форд", "БМВ", "Мерседс"];
const fib = [1, 1, 2, 3, 5, 8, 13];
const people = [
  { name: "Vladilen", budget: 4200 },
  { name: "Elena", budget: 3500 },
  { name: "Victoria", budget: 1700 },
];

// Методы
cars.push("Рено");
cars.unshift("Волга");
console.log(cars);
const firstCar = cars.shift();
const lastCar = cars.pop();
console.log(firstCar);
console.log(lastCar);
console.log(cars);

console.log(cars.reverse());
console.log(cars);

const index = cars.indexOf("БМВ");
cars[index] = "Лада";
console.log(cars);

let findedPerson;
for (const person of people) {
  if (person.budget === 3500) {
    findedPerson = person;
  }
}

console.log(findedPerson);

const i = people.findIndex(function (person) {
  return person.budget === 3500;
});

const person2 = people.find(function (person) {
  return person.budget === 3500;
});

console.log(person2);
const person3 = people.find((person) => person.budget === 3500);
console.log(person3);

console.log(cars.includes("Мазда!"));

const upperCaseCars = cars.map((car) => {
  return car.toUpperCase();
});
const pow2 = (num) => num ** 2;
const sqrt = (num) => Math.sqrt(num);
const pow2Fib = fib.map(pow2).map(Math.sqrt);
console.log(pow2Fib);
const filteredNumbers = pow2Fib.filter((num) => num < 10);
console.log(filteredNumbers);

const text = "Привет, мы изучаем JavaScript";
const reverseText = text.split("").reverse().join("");
console.log(reverseText);

const allBudget = people
  .filter((person) => person.budget > 2000)
  .reduce((acc, person) => {
    acc += person.budget;
    return acc;
  }, 0);

console.log(allBudget);
