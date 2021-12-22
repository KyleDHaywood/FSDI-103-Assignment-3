let calculator = () => {
  let firstNum = Number(prompt("first number: "));
  let secondNum = Number(prompt("second number: "));

  let sum = firstNum + secondNum;
  let sub = firstNum - secondNum;
  let mul = firstNum * secondNum;
  let div = firstNum / secondNum;

  console.log(firstNum, secondNum);

  document.getElementById(
    "results"
  ).innerHTML += `<p> ${firstNum} + ${secondNum} = ${sum}<p>`;
  document.getElementById(
    "results"
  ).innerHTML += `<p> ${firstNum} - ${secondNum} = ${sub}<p>`;
  document.getElementById(
    "results"
  ).innerHTML += `<p> ${firstNum} * ${secondNum} = ${mul}<p>`;
  document.getElementById(
    "results"
  ).innerHTML += `<p> ${firstNum} / ${secondNum} = ${div}<p>`;
};

calculator();
