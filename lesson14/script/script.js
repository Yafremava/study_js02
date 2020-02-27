'use strict';
function DomElement(selector, height, width, bg, fontSize){
  this.selector = selector;
  this.height = height; 
  this.width = width; 
  this.bg = bg; 
  this.fontSize = fontSize;
}
DomElement.prototype.createElement = function(){
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
const domElement = new DomElement('.block', 100, 100, 'pink', 55);
const domElement1 = new DomElement('.block');

domElement1.createElement('.block');
console.log(domElement1);