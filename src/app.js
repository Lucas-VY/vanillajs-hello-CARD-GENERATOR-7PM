/* eslint-disable */
import "bootstrap";
import "./style.css";
/* window.onload = function() {
  //write your code here
 document.querySelector('#the-numbers').innerHTML = generateRandomNumber();
 document.querySelector('#the-symbols').classList.add(generateRandomSuit());
};

let generateRandomNumber = () =>{
  let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let indexNumbers = Math.floor(Math.random() * numbers.length); 
  return numbers(indexNumbers);
};

let generateRandomSuit = () =>{
  let suit = ["♥","♦","♠","♣"]; 
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit(indexSuit);
};


 */
function deck() {
const numbers = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
const suits = ["♥","♦","♠","♣"];

const cards = [];
for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < values.length; j++) {
    const value = values[v];
    const suit = suits[s];
    cards.push({ value, suit });
  }
}
return cards;

}






/* document.querySelector('.card').classList.add(generateRandomSuit());
document.querySelector('.card').innerHTML = (generateRandomNumber());

};
 
let generateRandomNumber = () => {
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  return numbers[indexNumbers];
};
let generateRandomSuit = () => {
  let indexSuilt = Math.floor(Math.random() * suit.length);
  let suit = ["♥","♦","♠","♣"]; 
  return suit[indexSuit]
}; */