//defining a function
function sum(num1, num2) {
  const result = num1 + num2;
  return result;
}

function gretting() {
  console.log('Hello!');
}

function getPiValue() {
  return 3.41;
}
const a = 5;
const b = 6;
console.log(sum(a, b));

gretting();
const pi = getPiValue();
console.log(pi);

//document.getElementById();

//Write a function that takes number as the argument and prints multiplication table

function multipicationtable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
}
multipicationtable(5);
multipicationtable(28);
multipicationtable(985);
multipicationtable(6547854);

//calling a function that to print multipication tavle of 5,28,985,6547854

//passing argumnet
//pass by value()

function greetingInEnglish(name) {
  name = 'Donald';
  return `Hello ${name}!`;
}
let name = 'Alex';
console.log(greetingInEnglish(name));
console.log(name);

function printNumOfDays(days) {
  days.push('Wednesday');
  for (const day of days) {
    console.log(day);
  }
}
const days = ['sunday', 'Monday', 'Tuesday'];
printNumOfDays(days);
console.log(days);

// Anonymous function
//callback function = if you pass function as an argument it is called callback function
function doSomething(callback) {
  callback();
}
doSomething(function () {
  console.log("It's done!");
});

//

function doFirstthing(callback) {
  console.log('This is doing first thing!');
  callback();
}

doFirstthing(function () {
  console.log('this is doing second thing!');
});

// conditionally defining a function using an expression / function expression

function getThere(distance) {
  let estimatedTripDuration = 0;
  if (Water === true) {
    const getSwimTime = function () {
      return distance / 2;
    };
    estimatedTripDuration = getSwimTime();
  } else {
    const getWalkTime = function () {
      return distance / 4;
    };
    estimatedTripDuration = getWalkTime();
  }
  return estimatedTripDuration;
}
const distance = 10;
console.log(`It will take ${getThere(distance)} hours to get there;`);

//arrow Function

//const getWalkTime = ()=> { arrow Function}
const doubleArra = [1, 2, 3, 4].map((item) => item * 2);
console.log(doubleArra);
//

class ToDoItem {
  constructor(title) {
    this.title = title;
    this.isCompleted = false;
  }
}
let toDoList = [];
function handleFormSubmit(event) {
  event.preventDefault();
  const value = document.querySelector('form input').value;
  const toDoItem = new ToDoItem(value);
  toDoList.unshift(toDoItem);
  renderToDoList();
  clearInput();
  updateTotal();
}
function clearInput() {
  document.querySelector('form input').value = '';
  if (value) {
  }
}
function updateTotal() {
  document.querySelector('#count').innerHTML = toDoList.length;
}
function renderToDoList() {
  const ul = document.querySelector('ul');
  const liHTML = toDoList.forEach((item) => {
    const li = `<li >${item.index} < input checked = { item.isCompleted  ? "class= 'completed' " : ''} > $ {
    item.title } <input $ {
    item.isCompleted && 'checked'} type="chekbox" data-index= "${index}" /> </li>`;
    return li;
  });
  ul.innerHTML = liHTML.join('');
  const checkboxArray = document.querySelector('input[type="checkbox"]');
  checkboxArray.forEach((checkboc) =>
    checkbox.addEventListener('click', toggleCheckbox)
  );
}
function toogleCheckbox(event) {
  let index = event.target.dataset.index;
  toDoList = toDoList.map((todo, i) => {
    if (i == index) {
      todo.isCompleted = !todo.isCompleted;
    }
    return;
  });
  console.log(event.target);
}
document
  .querySelector('Form button')
  .addEventListner('click', handleFormSubmit);
