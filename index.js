//CALLBACK FUNCTION IN JAVASCRIPT
setTimeout(function(){
    console.log("See");
},5000)

function x(y){
 console.log("x");
 y();

}
x(function y(){
console.log("y");
})
//->It means when we pass a function onto another function and
//and later that function is called sometimes later by the outer function 
//it allows to do asynchrounous programming in javascript and it is a powerful feature of javascript as it allows us to write code that can run in the background and not block the main thread. It is also used in event listeners and in many other places in javascript. It is a fundamental concept in javascript and is used in many libraries and frameworks.


//Javascript is a single threaded and synchronous language


//Blocking the main Thread


//Power of Callbacks


//Deep about Event listeners


//Closures Demo with Event Listeners


//Scope Demo with Event Listeners


//Garbage Collection and removing Event Listeners
function attachEventListener(){
let count=0;
document.getElementById("Click me")
.addEventListener("click", function xyz(){
    console.log("Button clicked",count++);
});
}
attachEventListener();

//In the above code we are attaching an eventlistener function now 
// and closure is created and count variable is stored in the closure and every time we click the button it will log the count variable and increment it by 1. Now if we want to remove the event listener we can do it by using the removeEventListener method and passing the same function reference that we used to attach the event listener. But in this case we are using an anonymous function and we cannot remove it because we don't have a reference to it. So to remove the event listener we need to use a named function instead of an anonymous function.   
//remove eventlisteners


//EVENTLOOP
