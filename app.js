// window.alert(1);

// window.confirm();

const heading = document.getElementById("hello");
// const heading2 = document.getElementsByTagName("h2");
// const heading2 = document.getElementsByClassName("h2-class");
const heading2 = document.querySelector(".h2-class");
// querySelector всегда 1 элемент

// console.dir(heading);
console.dir(heading2);
const heading3 = heading2.nextElementSibling;
console.dir(heading3);

const h2All = document.querySelectorAll("h2");
console.dir(h2All);

// console.dir(heading.id);
// console.dir(heading.textContent);

function addStylesTo(node, text, fontSize) {
  node.textContent = text;
  node.style = `padding: 10px;
  border: solid 3px;
  border-radius: 10px;
  border-color: black;
  margin-bottom: 0;
  margin-top: 10px;
  text-align: center;
  `;
  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

function increaseFont(node, factor) {
  console.log(node.style.fontSize);
  node.style.fontSize = `${factor}rem`;
}

setTimeout(() => {
  heading.textContent = "Измененный из JS текст";
}, 1000);

setTimeout(() => {
  addStylesTo(heading, "Измененный и отцентрованный из JS текст");
}, 2000);

setTimeout(() => {
  addStylesTo(heading2, "И еще");
}, 3000);

setTimeout(() => {
  addStylesTo(heading3, "А теперь наведи на меня");
}, 4000);

heading3.onclick = () => {
  increaseFont(heading3, 5);
};

console.log(heading3);

heading3.onmouseover = (event) => {
  increaseFont(event.target, 5);
  heading3.textContent = "Я теперь большой";
};

heading2.onmouseover = (event) => {
  event.target.textContent = "Зачем навелся а?";
};

heading2.onmouseout = (event) => {
  event.target.textContent = "И еще";
};

const text = document.querySelector("#main-text");
text.style.cursor = "pointer";
console.log();

text.onclick = (event) => {
  console.log(event.target.style.fontSize);
  if (event.target.style.fontSize === "1rem" || "") {
    event.target.style.fontSize = "2rem";
  } else {
    event.target.style.fontSize = "1rem";
  }
};
