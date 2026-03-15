function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);

    },4000);
    console.log("BRewww");
}
x();
function timer(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
                },i*1000)
    }
}
timer();
//it prints 6  five times because by the time the setTimeout callback functions are executed, the loop has already completed and the value of i is 6. To fix this issue, we can use an IIFE (Immediately Invoked Function Expression) to create a new scope for each iteration of the loop and capture the current value of i. Here is the modified code:
function timer(){
    for(var i=1;i<=5;i++){
        (function(j){
            setTimeout(function(){
                console.log(j);
            },j*1000);
        })(i);
    }}
f();
g();
//Function Statemnet:just the declaration of the function
function f(){
    console.log("f called");}
//Function Expression: the function is assigned to  a variable
 //it is different from function statement as it is assigned
 //  to a variable
 //Hoisting creates the major differnce the function expression is assigned to a variable and is considered underfined.

 var g=function (){
    console.log("g calles");
 }
 //Function declaration: it is a combination of function statement and function expression. It is a function that is declared and assigned to a variable at the same time. 
 //anonymous function: it is a function without a  name. It is often used as a callback function or as an argument to another function. For example:
setTimeout(function(){
    console.log("Hello World");
},1000);
//here function are used as values of other functions.
//if a function is named inside a variable and again named there..then if we call it in its inner name it will show undefined as it is only 
//accessible by the variable name and not by the inner name. For example:
var a=function b(){
    console.log("Hello World");
}
//parameters and arguments:parameter are given while declaring functions and argument are given when we call them fucntions
//FIRST CLASS FUNCTION: it is a function that can be treated as a first class citizen. It means that it can be assigned to a variable, passed as an argument to another function, and returned from a function. For example:
function add(a,b){  
    return a+b;
}
var sum=add;
console.log(sum(2,3));
//Higher order function: it is a function that takes another function as an argument or returns a function as a result. For example:
function higherOrderFunction(func){
    return function(){
        console.log("Before calling the function");
        func();
        console.log("After calling the function");
    }}
//Arrow function: it is a shorter syntax for writing functions in JavaScript. It is also known as a fat arrow function. It does not have its own this keyword and it is not suitable for methods in objects. For example:
