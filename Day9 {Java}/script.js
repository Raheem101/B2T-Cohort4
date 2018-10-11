console.log('Hello from external');

// Making variables starts only with letter or _
// console needs to be Below what Ever Its Trying To Define
// String = anything in quotes
let age = 25;
let year = 1993;

console.log(year - age);

let name = 'Raheem'
console.log(name + ' loves basketball');
console.log(name + ' is age ' + age);
console.log(name + ' is age ' + (age + 3));
//get name from prompt and saves as user
let user = prompt('Enter Name')
//prints welcome messege to screen
console.log('Welcome ' + user);

// GETS H1 ELEMENT WITH ID 'MESSAGE'
let messageh1 = document.getElementById('message');
//EDITS TEXT OF H1 ELEMENT
messageh1.innerHTML = 'Welcome ' + user;

let usercolor = prompt('Enter color');
messageh1.style.color = usercolor;
