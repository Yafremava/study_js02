' use strict';
let isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n));
};



function guessTheNumber(){
  let guessednumber = Math.ceil(Math.random()*100);// от 1 до 100
  console.log(guessednumber);
  function guessTheNumber02(){
    let customnumber = prompt('Угадай число от 1 до 100');
    while(guessednumber != customnumber){
      if (!isNumber(customnumber)){
        customnumber = prompt('Введи число');
      } 
      
      else if (customnumber > guessednumber) {
        customnumber = prompt('Загаданное число меньше, введи заново');
      } 
      
      else if (customnumber < guessednumber) {
        customnumber = prompt('Загаданное число больше, введи заново');
      } 
      if (customnumber === null) {
        alert('Игре конец');
      }
    }
    alert('Ты угадал число ' + guessednumber);
  }
  guessTheNumber02();
}
guessTheNumber();