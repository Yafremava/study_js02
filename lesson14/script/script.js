'use strict';
function DomElement(){
  this.selector = '';
  this.height = 0; 
  this.width = 0; 
  this.bg = 0; 
  this.fontSize = 0;
}
DomElement.prototype.createElement = function(selector){
  if (this.selector[0] === '.'){
    let elem = document.createElement('div');

    elem.classList.add(this.selector.browserType.slice(1));

    let text = document.createTextNode("Привет");
    elem.appendChild(text);

    elem.style.cssText = "background-color:pink;font-size:55px;width: 50px;height: 50px;";
  } else if(this.selector[0] === '#'){
    let elem = document.createElement('id');
    
    elem.classList.add(this.selector.browserType.slice(1));
    let text = document.createTextNode("Пока");
    elem.appendChild(text);

    elem.style.cssText = "background-color:blue;font-size:55px;width: 50px;height: 50px;";
  }
};
const domElement = new DomElement();
const domElement1 = new DomElement();

domElement1.createElement('.block');
console.log(domElement1);