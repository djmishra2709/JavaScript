//variable
let name ="Dheeraj Kumar";
console.log(name);

//constant and it can not be re-assigned
const name1="sagarika";
const age=30;
console.log(name1," ",age);

//objects
let first ="Dheeraj";
let last ="mishra";
let person ={
    name2 :"saga",
    age2:28
};

//dot notation
console.log(person.name2, " ",person.age2);

//bracket notation
person['name2']="niraj";
console.log(person.name2);

//Array and it is dynamic in size at runtime
let array=['A','B','C'];
array[3]="Dheeraj";
console.log(array.length," ",array.indexOf('Dheeraj')," ",array);

//function
function greet(name)
{
    console.log('Hello', name);
}
greet('Dheeraj');


//============types of functions
function square(number)
{
    return number*number;
}
console.log(square(2))

//============arithmatic operator
let x =30;
let y =5;
console.log(x+y);
console.log(x*y);
console.log(x/y);
console.log(x**y);
console.log(x++);

//==========equality

let x1=1;
console.log(x1>1); //false
console.log(x1<1); //false
console.log(x1===1); //true
console.log(x1!==1); //false

console.log('1'==1)  //true
console.log('1'===1) //false

//============logical operator

// && for and
// || for OR
// ! for not
//let y1 = false && true;
//confirm.log(false && true);

console.log(false|| 1||2); // it will return first occured true operant and ignore rest of the operators

//bitwise OR AND
console.log(1|2);
console.log(1&2);

//======swapping===
let a=10;
let b=30;
let temp;
temp =b;
b=a;
a=temp;

console.log (a ," ",b);