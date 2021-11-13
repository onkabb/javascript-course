const person = {
  name: "Ilya",
  age: 26,
  isProg: true,
  languages: ["ru", "en"],
  "complex key": "Value",
  ["key _" + (1 + 5)]: "Computed",
  greet() {
    console.log("greet from person");
  },
  info() {
    console.log(this);
    console.info("Информация про человека по имени:", this.name);
  },
};

console.log(person.name);
const ageKey = "age";
console.log(person[ageKey]);
console.log(person["complex key"]);
person.greet();

person.age++;
person.languages.push("kz");

// person['key_4'] = undefined;
delete person["key_4"];

console.log(person["key_4"]);

// const name = person.name;
// const age = person.age;
// const languages = person.languages;

const { name, age: personAge = 10, languages } = person;
console.log(name, personAge, languages);

for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
    const element = person[key];
    console.log(element);
  }
}

const keys = Object.keys(person);
keys.forEach((key) => {
  console.log("key:", key);
  console.log("value:", person[key]);
});

// Context
person.info();

const logger = {
  keys() {
    console.log(Object.keys(this));
  },
  keysAndValues() {
    // Object.keys(this).forEach((key) => {
    //   console.log(`"${key}": ${this[key]}`);
    // });
    for (const key in this) {
      if (Object.hasOwnProperty.call(this, key)) {
        console.log("Key: " + key);
        console.log("Value: " + this[key]);
      }
    }
  },
  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log("- Start -");
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(`"${key}": ${this[key]}`);
      if (between && index !== array.length - 1) {
        console.log("---------");
      }
    });

    if (bottom) {
      console.log("- End -");
    }
  },
};

const bound = logger.keys.bind(person);
bound();

console.clear();
logger.keysAndValues.call(person);
logger.withParams.call(person, true, true, true);
