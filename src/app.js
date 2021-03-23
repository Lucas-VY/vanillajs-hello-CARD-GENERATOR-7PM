window.onload = function () {
  let randomSymbol = generateRandomSuit();
  if(randomSymbol === "♥" || randomSymbol === "♦"){
    document.querySelector('#symbol1').style.color = "red";
    document.querySelector('#symbol2').style.color = "red";
  }
  document.querySelector('#symbol1').innerHTML = randomSymbol;
  document.querySelector('#symbol2').innerHTML = randomSymbol;
  document.querySelector('.middle-number').innerHTML = generateRandomNumber();

};

let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["♥", "♦", "♠", "♣"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  
  return suit[indexSuit];
};