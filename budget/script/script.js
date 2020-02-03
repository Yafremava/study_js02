' use strict';
let customnumber = prompt("Угадай число от 1 до 100");
function guessTheNumber(){
  if (!isNaN(parseFloat(customnumber)) && isFinite(customnumber)) {
    alert('Введи число!');
  }
  function guessTheNumber02(guessednumber) {
    if (customnumber > guessednumber) {
      alert('Загаданное число меньше');
    } else if (customnumber < guessednumber) {
      alert('Загаданное число больше');
    }  
    return guessTheNumber02(35);
  }
  console.dir(guessTheNumber02);
}
guessTheNumber(34);