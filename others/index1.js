// // // getName();//function declared is hoisted but not the variable 
// // // //undefined means variable is declared but later
// // // //not defines means variable is not declared at all
// // // console.log(x);
// // // var x=7;
// // // function getName(){
// // //     console.log("Hello World");
// // // }
// // // getName();
// // // console.log(x);
// // // function a(){
// // //     var x=10;
// // //     console.log(x);
// // // }
// // // //
// // // function b(){
// // //     var x=100;
// // //     console.log(x);
// // // }
// // // a();
// // // b();
// // // //the smallest javascript program is an empty file
// // // //hoisting is a mechanism in which variables and function declarations are moved to the top of their containing scope during the compilation phase before the code is executed. This means that you can use variables and call functions before they are actually declared in the code.
// // // //each time a js program runs a global object called window
// // // //and a global execution context is created
// // // //"this" referes to the global object.
// // // //global space means everyhing which is not inside any function
// // // //flexible as it does not assigns a datatype to a variable and we can change the datatype of a variable at any time

// // // var c;
// // // console.log(c);
// // // if(c===undefined){
// // //     console.log("c is undefined");

// // // }
// // // else{
// // //     console.log("c  is defined");
// // // }
// // function a(){
// //     function c(){
// //     console.log(b);
// // }}
// // var b=10;
// // a();
// // //let and const are hoisted like var and tehy are kept in temporal dead zone until they are declared and initialized. This means that you cannot access them before they are declared in the code, and doing so will result in a ReferenceError.

// // let c=10;
// // //let items are not attachedto the global object and they are block scoped. They are not accessible outside the block in which they are declared.   
// // //it can not be redeclared,it gives a redeclrartion error.
// // //it is stored in temporal dead zone.this is the time between initialization and declaration of a variable. During this time, the variable is not accessible and will throw a ReferenceError if you try to access it.  
// // var b=99;
// // console.log(c);
// // const n=90;
// // //const is a bit more strict than let. It must be initialized at the time of declaration and it cannot be reassigned. It is also block scoped and not attached to the global object. Like let, it is also stored in the temporal dead zone until it is declared and initialized.
// // //const can not be redeclared and it gives a redeclrartion error. It is stored in temporal dead zone.this is the time between initialization and declaration of a variable. During this time, the variable is not accessible and will throw a ReferenceError if you try to access it.
// // //now there are three types of variables in js var,let and const. Var is function scoped and can be redeclared and updated. Let is block scoped and can be updated but not redeclared. Const is block scoped and cannot be updated or redeclared. All three are hoisted but var is initialized with undefined while let and const are not initialized and are in temporal dead zone until they are declared and initialized.
// // //three ypes of error
// // //syntax error: it occurs when there is a mistake in the syntax of the code. For example, missing a closing parenthesis or a semicolon.
// // //reference error: it occurs when you try to access a variable that is not declared or is out of scope.
// // //type error: it occurs when you try to perform an operation on a value of the wrong type. For example, trying to call a non-function as a function or trying to access a property of undefined.   
// // //BLOCK SCOPE: It is the area within curlybraces where we can group a certain set of statements  that can be reused later. It is created by using curly braces {}. Variables declared inside a block are only accessible within that block and are not accessible outside of it. This is known as block scope. For example:
// // {
// //     var a=10;
// //     let b=20;
// //     const c=30;
// //     console.log(a);
// //     console.log(b);
// //     console.log(c);
// // }
// // //let and cont are block scoped but var stays in global scope.
// // //Shadowing?? a same named variable outside the block is shadowed by the variable declared inside the block. For example:
// // const x=100;
// // {
// //     const x=10;
// //     console.log(x);
// // }
// // console.log(x);
// // //var is initailly in global scope but it is sahdowed by x in block that is block scope and it is updated to 10. So when we log x inside the block it gives us 10 but when we log x outside the block it gives us 10 because var is function scoped and it is not block scoped. If we use let or const instead of var then it will give us 100 when we log x outside the block because let and const are block scoped and they do not affect the variable in global scope.    
// // //but const works according the scope, if it is used inside then it used the value of the block, else it uses the value of the global scope. It does not update the value of the global scope. It is just a shadowing of the variable in the block scope.   
// // //illegal shadowing?? It is a situation where a variable declared in a block scope has the same name as a variable declared in an outer scope, and the inner variable is not accessible outside the block. For example:
// //CLOSURE
// //function bundled with their lexical scopeis called closure. It allows a function to access variables from an enclosing scope or environment even after it leaves the scope in which it was declared. For example:
// // function outer(){
// //     let count=0;
// //     function inner(){
// //         count++;
// //         console.log(count);
// //     }   }
// // const fn=outer();
// // fn();
// // fn();
// // fn();
// //In this example, the inner function has access to the count
// //  variable from the outer function's scope, even after the outer function has finished executing. Each time we call fn(), it increments the count variable and logs the updated value. This is a demonstration of closure in JavaScript.    
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);

//     }
//     return y;
// a=100;
// }
//     var z=x();
//     console.log(z);
//     z();
// //corner cases:
// console.log(a);
// // a=10;
