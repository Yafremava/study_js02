'use strict';
let isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n));
};

const Budget = function(){
  this.guessednumber = Math.ceil(Math.random()*100);// от 1 до 100
  this.customnumber = prompt('Угадай число от 1 до 100');
  if (this.customnumber === null) {
    return(alert('Игре конец :('));
  }   
};

Budget.prototype.eventsListeners =function(){
  if (!isNumber(this.customnumber)){
    this.customnumber = prompt('Введи число');
  } 
    
  else if (this.customnumber > this.guessednumber) {
    this.customnumber = prompt('Загаданное число меньше, введи заново');
  } 
    
  else if (this.customnumber < this.guessednumber) {
    this.customnumber = prompt('Загаданное число больше, введи заново');
  } 
  
  else if (this.customnumber === this.guessednumber){
    return(alert('Ты угадал число ' + this.guessednumber));
  }
 
};

const budget = new Budget();
console.log(budget);