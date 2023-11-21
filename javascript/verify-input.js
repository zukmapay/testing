const form = document.querySelector(".tf-form-verify");
const inputs = form.querySelectorAll("input");
const KEYBOARDS = {
  backspace: 8,
  arrowLeft: 37,
  arrowRight: 39,
};

function handleInput(e) {
  const input = e.target;
  const nextInput = input.nextElementSibling;
  if (nextInput && input.value) {
    nextInput.focus();
    if (nextInput.value) {
      nextInput.select();
    }
  }
}

function handlePaste(e) {
  e.preventDefault();
  const paste = e.clipboardData.getData("text");
  inputs.forEach((input, i) => {
    input.value = paste[i] || "";
  });
}

function handleBackspace(e) {
  const input = e.target;
  if (input.value) {
    input.value = "";
    return;
  }

  input.previousElementSibling.focus();
}

function handleArrowLeft(e) {
  const previousInput = e.target.previousElementSibling;
  if (!previousInput) return;
  previousInput.focus();
}

function handleArrowRight(e) {
  const nextInput = e.target.nextElementSibling;
  if (!nextInput) return;
  nextInput.focus();
}

form.addEventListener("input", handleInput);
inputs[0].addEventListener("paste", handlePaste);

inputs.forEach((input) => {
  input.addEventListener("focus", (e) => {
    setTimeout(() => {
      e.target.select();
    }, 0);
  });

  input.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      case KEYBOARDS.backspace:
        handleBackspace(e);
        break;
      case KEYBOARDS.arrowLeft:
        handleArrowLeft(e);
        break;
      case KEYBOARDS.arrowRight:
        handleArrowRight(e);
        break;
      default:
    }
  });
});
