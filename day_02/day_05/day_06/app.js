// Array() Constructor
// Assigning array as a value

// let daysOfAweek = new Array(
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'wednesday',
//   'thursday',
//   'friday',
//   'saturday'
// );
// console.log(daysOfAweek);
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers);

// let subjects = new Array('science', 'maths', 'econimics', 'social', 'computer');
// console.log(subjects);

// let pastAdresses = ['flemington', 'kathmandu', 'pokhara'];
// console.log(pastAdresses);

// const address = '10 Bridge Street, Granville 2142, NSW';
// const addressArr = address.split(',');
// let streetAddress = addressArr[0];
// let surburb = addressArr[1];
// let State = addressArr[2];

// for (let item of addressArr) {
//   console.log(item);
// }

// for (let i = 0; i < addressArr.length; i++) {
//   console.log(addressArr[i]);
// }

// deleted array elements
// change the length of an the array

// addressArr.length = 3;

const value0 = numbers.push(11);
const value1 = numbers.pop();
const value0 = numbers.unshift(-1);

//splice
const value4 = numbers.splice(5, 1);

//fullName = "Donald lee trump"
//remove the middle name and return Donald trump as final result

// let fullName = 'Donald lee Trump';
// const value5 = fulName.split('');
// fullNameArr.splice(1, 1);
// let updatedFulName = fulNameArr.join('');
// let newNumbers = [101, 102, 103, 104, 105];
// const combinedNumbers = numbers.concat(newNumbers());

// const stringNumbers = combinedNumbers.toString();
// const indexOf101 = combinedNumbers.indexOf(101);

//Callback function

const total = combinedNumbers.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, 0);

//map
let groceryList = ['apple', 'eGg', 'milk', 'onion', 'GARLIC'];
const mappedGroceryList = groceryList.map(function (item) {
  let firstletter = item[0].toUpperCase();
  let restLetters = item.slice(1, item.length - 1).toLowerCase();
  let capitalizedItem = firstLetter + restLetters;
  return capitalizedItem;
});

//filter
let groceryListStartingWith0 = groceryList.filter(function (item) {
    if (item.[0].toUpperCase() === '0'){
        return true;
    }
    return false;

});

// destructing with array



const [, , newState] = addressArr;

//spreading Arrays
//...
const letters = ['a','e','i'];
let newLetters = ['o', ...letters, 'u'];

let [o,a, ...rest]= newLetters;



//  and modify array elements.
// Add or remove elements (using push(), pop(), shift(), unshift()).
// Iterate over an array (using for, forEach(), map(), etc.).
// Search for elements (using indexOf(), includes(), find()).
// AccessTransform arrays (using sort(), filter(), map()).


const arrayFunction = [
   'access and modify array elements'
     'Add or remove elements (using push(), pop(), shift(), unshift()).'
     'Iterate over an array (using for, forEach(), map(), etc.).'
     'Search for elements (using indexOf(), includes(), find()).'
    ' AccessTransform arrays (using sort(), filter(), map()).'

];
const arrayfunctionWithli = arrayFunctions.map (function (item){
    return '<li>' + item + '</li>';
});

const arrayfunctionWithliString = arrayFunctionWithli.join('');
const body = document.querySelector('body');
body.innerHTML = '<ol>' + arrayfunctionWithliString + '<ol>';