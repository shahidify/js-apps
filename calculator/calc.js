(function() {
  let runningTotal = 0;
  let buffer = "0";
  let prevOp;
  const screen = document.querySelector(".screen");

  document
    .querySelector(".calc-buttons")
    .addEventListener("click", e => buttonClick(e.target.innerText));

  const buttonClick = value => {
    isNaN(parseInt(value)) ? handleSymbol(value) : handleNumber(value);
    rerender();
  };

  const handleNumber = value =>
    buffer === "0" ? (buffer = value) : (buffer += value);

  function handleSymbol(value) {
    switch (value) {
      case "C":
        buffer = "0";
        runningTotal = 0;
        break;
      case "=":
        if (prevOp === null) {
          return;
        }
        flushOperation(parseInt(buffer));
        prevOp = null;
        buffer = "" + runningTotal;
        runningTotal = 0;
        break;
      case "←":
        if (buffer.length === 1) {
          buffer = "0";
        } else {
          buffer = buffer.substring(0, buffer.length - 1);
        }
        break;
      default:
        handleMath(value);
        break;
    }
  }

  function handleMath(value) {
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
      runningTotal = intBuffer;
    } else {
      flushOperation(intBuffer);
    }
    prevOp = value;
    buffer = "0";
  }

  function flushOperation(intBuffer) {
    if (prevOp === "+") {
      runningTotal += intBuffer;
    } else if (prevOp === "-") {
      runningTotal -= intBuffer;
    } else if (prevOp === "×") {
      runningTotal *= intBuffer;
    } else {
      runningTotal /= intBuffer;
    }
  }

  function rerender() {
    screen.innerText = buffer;
  }
})();
