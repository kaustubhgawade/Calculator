const modeBtn = document.getElementById("mode-btn");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const display = document.querySelector(".display");
const textarea = document.querySelector(".display textarea");
const displayBtns = document.querySelectorAll(".display .btns button");
const keypadBtns = document.querySelectorAll(".keypad button");

let flag = 0;
modeBtn.addEventListener("click", () => {
  console.log("hello");
  if (flag === 0) {
    modeBtn.textContent = "Light Mode";
    flag = 1;
  } else {
    modeBtn.textContent = "Dark Mode";
    flag = 0;
  }

  body.classList.toggle("body-style");

  container.classList.toggle("container-style");
  container.classList.toggle("container-style-2");

  display.classList.toggle("display-style");
  display.classList.toggle("display-style-2");

  textarea.classList.toggle("textarea-style");
  textarea.classList.toggle("textarea-style-2");

  for (const element of displayBtns) {
    element.classList.toggle("display-btns-style");
    element.classList.toggle("display-btns-style-2");
  }

  for (const element of keypadBtns) {
    element.classList.toggle("keypad-btns-style");
    element.classList.toggle("keypad-btns-style-2");
  }
});
