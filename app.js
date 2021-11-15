// Event loop

const timeout = setTimeout(() => {
  console.log("after timeout");
}, 2500);

clearTimeout(timeout);

const interval = setInterval(() => {
  console.log("interval");
}, 2500);

clearInterval(interval);

// const delay = (callback, wait = 1000) => {
//   setTimeout(callback, wait);
// };

// delay(() => {
//   console.log("after 2 sec");
// }, 2000);

const delay = (wait = 1000) => {
  return new Promise((resolve, peject) => {
    setTimeout(() => {
      // resolve();
      peject("Что то пошло не так");
    }, wait);
  });
};

delay(2500)
  .then(() => {
    console.log("after 2 sec");
  })
  .catch((err) => {
    console.error("Error", err);
  })
  .finally(() => {
    console.log("fin");
  });

const getData = () => new Promise((resolve) => resolve([1, 1, 2, 3, 5]));

getData().then((data) => console.log(data));

async function asyncExample() {
  try {
    await delay(3000);
    const data = await getData();
    console.log(data);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Finally");
  }
}

asyncExample();
