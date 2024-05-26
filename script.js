alert("I am Javascript!")

alert("I am Javascript!");

alert("Hello");
[1,2].forEach(alert);

alert("Javascript is Fun");
["a",'a',33].forEach(alert);

alert("Javascript is Fun");
["a",'a',33].forEach(console.log);
// a 0 (3) ['a', 'a', 33]0: "a"1: "a"2: 33length: 3[[Prototype]]: Array(0)
// a 1 (3) ['a', 'a', 33]
// 33 2 (3) ['a', 'a', 33]
let _ = 1;
let $ = 9;
alert($);
alert(_);

num = 3;
alert(num);


num = 3;
alert(num);


const FATHER = "Anonymous";
const BROTHER = "Hide Identity";
console.log(FATHER);
console.log(BROTHER);


/*
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/

let admin;
let name = "john";
admin = name;
alert(admin);

/*Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable?
*/
let planetEarth = "Earth";
let current_visitor = "John";

let back_tick = "A big Int";
alert(`we can embed it in ${back_tick}`);

console.log("you can get ${1+2+3} results");        // you can get 6 results.
console.log(`you can get ${1+2+3} results`);        //you can get ${1+2+3} results

/*
There are 8 basic data types in JavaScript.

Seven primitive data types:                                                  One non-primitive data type
Number                                                                       Object
Bigint
String
Boolean
Null
Undefined
Symbol
*/


//alert, confirm, prompt:               
/*alert: shows a message.  
prompt: shows a message asking the user to input text.
confirm: shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
*/
let yourName = "Sami Ullah!";
alert(yourName);
prompt(`Your name is ${yourName}`);
confirm("Are you  Man?");

let dayToday = prompt("Today is", "");
let confirmation = confirm("Really, Is it?");
alert(confirmation);

//Assignment Task!
let yourFulName = prompt("What is your Full Name");
alert(yourFulName);

//starts from 2.7 javascript.info
