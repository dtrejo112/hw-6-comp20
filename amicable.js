function calcAmicable(numberOne, numberTwo) {
  var firstFactors = getFactors(numberOne);
  var secondFactors = getFactors(numberTwo);
  var sumOfArrayOne = addArray(firstFactors);
  var sumOfArrayTwo = addArray(secondFactors);

  if (sumOfArrayOne == numberTwo && sumOfArrayTwo == numberOne) {
    showNumbers(numberOne, numberTwo);
  } else {
    document.getElementById("numbersToshow").innerHTML =
      "First Number: " +
      numberOne +
      " Second Number: " +
      numberTwo +
      " are not amicable";
  }
}
function showNumbers(numberOne, numberTwo) {
  document.getElementById("numbersToshow").innerHTML =
    "First Number: " +
    numberOne +
    " Second Number: " +
    numberTwo +
    " are amicable";
}
function isFactor(numberOne, numberTwo) {
  if (numberOne % numberTwo == 0) {
    alert("is a factor");
    return true;
  }
}
function showArray(array) {
  document.getElementById("numbersToshow").innerHTML = array.join(" ");
}
function addArray(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
function getFactors(num) {
  var numArray = [];
  if (num < 0) {
    num = num * -1;
  }
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      console.log(i);
      numArray.push(i);
    }
  }
  return numArray;
}
