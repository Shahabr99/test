const div = document.querySelector("div");

function countDown(number) {
  setInterval(function () {
    if (number > 0) {
      number--;
      div.textContent = number;
    } else if (number === 0) {
      clearInterval();
    }
  }, 1000);
}

countDown(10);
////////////////////////////

let count = 0;
const numberGen = setInterval(function () {
  const randomNum = Math.random();
  if (randomNum >= 0.5) {
    clearInterval(numberGen);
    return count;
  } else {
    console.log(randomNum);
    count++;
  }
}, 1000);
