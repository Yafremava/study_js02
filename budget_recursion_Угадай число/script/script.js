' use strict';
let isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n));
};



function guessTheNumber(){
  let guessednumber = Math.ceil(Math.random()*100);// от 1 до 100
  console.log(guessednumber);
  let customnumber = prompt('Угадай число от 1 до 100');
  if (customnumber === null) {
    return(alert('Игре конец :('));
  }
  function guessTheNumber02(){
    if (customnumber === null) {
      return(alert('Игре конец :('));
    }  

    else if (!isNumber(customnumber)){
      customnumber = prompt('Введи число');
    } 
      
    else if (customnumber > guessednumber) {
      customnumber = prompt('Загаданное число меньше, введи заново');
    } 
      
    else if (customnumber < guessednumber) {
      customnumber = prompt('Загаданное число больше, введи заново');
    } 
    
    else if (customnumber == guessednumber){
      return(alert('Ты угадал число ' + guessednumber));
    }
    guessTheNumber02();
  }
  guessTheNumber02();
}
guessTheNumber();