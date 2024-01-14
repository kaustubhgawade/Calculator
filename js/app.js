const keypadBtn = document.querySelectorAll(".keypad-btn");
const displayTextarea = document.querySelector(".display textarea");
let store = "";

function backspace() {
  let length = displayTextarea.value.length;
  displayTextarea.value = displayTextarea.value.substring(0, length - 1);
}

keypadBtn.forEach((element) => {
  element.addEventListener("click", () => {
    let value = element.textContent;

    if (
      value !== "AC" &&
      value !== "C" &&
      value !== "+" &&
      value !== "-" &&
      value !== "*" &&
      value !== "/" &&
      value !== "↺" &&
      value !== "="
    ) {
      displayTextarea.value += value;
    } else if (value === "AC") {
      displayTextarea.value = "";
    } else if (value === "C") {
      backspace();
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      let ele = displayTextarea.value;
      let lastEle = ele.charAt(ele.length - 1);
      if (lastEle === "" && value === "-") {
        displayTextarea.value += "-";
      }
      if (/\d/.test(lastEle)) {
        displayTextarea.value += value;
      }
    } else if (value === "↺") {
      displayTextarea.value = store;
    } else if (value === "=") {
      store = displayTextarea.value;
      let result = evaluate(displayTextarea.value);
      result = parseFloat(result.toFixed(6));
      displayTextarea.value = result;
    }
  });
});

function evaluate(result) {
  return new Function("return " + result)();
}

// full screen
const fullscreen = document.querySelector("#fullscreen-btn");
fullscreen.addEventListener("click", fullScreenMode);
function fullScreenMode() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// keyboard events
document.addEventListener("keydown", (e) => {
  let key = e.key;
  let ele = displayTextarea.value;

  console.log(key);
  let lastEle = ele.charAt(ele.length - 1);
  let result = evaluate(displayTextarea.value);
  console.log(lastEle);

  function operatorsCheck() {
    if (/\d/.test(lastEle)) {
      displayTextarea.value += key;
    }
    keypadBtn[4].focus();
  }

  switch (key) {
    case "0":
      displayTextarea.value += key;
      break;
    case "1":
      displayTextarea.value += key;
      break;
    case "2":
      displayTextarea.value += key;
      break;
    case "3":
      displayTextarea.value += key;
      break;
    case "4":
      displayTextarea.value += key;
      break;
    case "5":
      displayTextarea.value += key;
      break;
    case "6":
      displayTextarea.value += key;
      break;
    case "7":
      displayTextarea.value += key;
      break;
    case "8":
      displayTextarea.value += key;
      break;
    case "9":
      displayTextarea.value += key;
      break;
    case "9":
      displayTextarea.value += key;
      break;
    case ".":
      displayTextarea.value += key;
      break;
    case "+":
      operatorsCheck();
      break;
    case "-":
      operatorsCheck();
      break;
    case "*":
      operatorsCheck();
      break;
    case "/":
      operatorsCheck();
      break;
    case "Backspace":
      let length = displayTextarea.value.length;
      displayTextarea.value = displayTextarea.value.substring(0, length - 1);
      break;
    case "=":
      store = displayTextarea.value;
      result = evaluate(displayTextarea.value);
      result = parseFloat(result.toFixed(6));
      displayTextarea.value = result;
      break;
    case "Enter":
      store = displayTextarea.value;
      result = evaluate(displayTextarea.value);
      result = parseFloat(result.toFixed(6));
      displayTextarea.value = result;
      break;

    default:
      break;
  }
});
