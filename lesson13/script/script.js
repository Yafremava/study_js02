'use strict';

document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),//строка в которую вводим данные
    todoList = document.querySelector('#todo'),
    completedList = document.querySelector('#completed');
  
  let data = {
    todo: [],
    completed: []
  };

  const renderItem = function(text){
    let item = document.createElement('li'),
      btnBlock = document.createElement('div'),
      btnRemove = document.createElement('button'),
      btnComplete = document.createElement('button');
    item.classList.add('todo-item');
    btnBlock.classList.add('todo-buttons');
    btnRemove.classList.add('todo-remove');
    btnComplete.classList.add('todo-complete');

    item.textContent = text;

    btnBlock.appendChild(btnRemove);
    btnBlock.appendChild(btnComplete);
    item.appendChild(btnBlock);

    todoList.insertBefore(item, todoList.childNodes[0]);
  };

  const addItem = function(text){
    renderItem(text);
    headerInput.value = '';
    data.todo.push(text);
    console.log(data.todo);
  };

  
  form.addEventListener('submit', function(even){// почитать про submit
    event.preventDefault();//чтобы страница не перегружалась

    if(headerInput.value !== ''){
      addItem(headerInput.value);
    }
  });
});