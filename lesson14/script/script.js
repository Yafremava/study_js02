'use strict';
function DomElement(selector, height, width, bg, fontSize, text){
  this.selector = selector;
  this.height = height; 
  this.width = width; 
  this.bg = bg; 
  this.fontSize = fontSize;
  this.text =text;
}
DomElement.prototype.createElement = function(){
  let elem;
  if (this.selector[0] === '.'){

    elem = document.createElement('div');
    elem.classList.add(this.selector.slice(1)); 

  } else if(this.selector[0] === '#'){

    elem = document.createElement('p');   
    elem.setAttribute('id', this.selector.slice(1));
  }
  elem.textContent = this.text;
  elem.style.cssText = `
    height: ${this.height}px;
    width:${this.width}px;
    background-color: ${this.bg};
    font-size: ${this.fontSize}px;
  `;
  let body = document.querySelector('body');
  body.append(elem);
};
const domElement = new DomElement('.block', 100, 230, 'pink', 70, 'Привет');
const domElement1 = new DomElement('#block', 100, 230, 'blue', 70, 'Пока');

domElement.createElement();
domElement1.createElement();