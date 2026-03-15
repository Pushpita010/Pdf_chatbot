let count=0;
var test=document.getElementById('count');
var b1=document.getElementById('btn1');
var b2=document.getElementById('btn2');
b1.addEventListener('mouseover',function(){
    b1.style.backgroundColor="lightpink"
})
b1.addEventListener('click',function(){
    count++;
  
    test.textContent=count;
})
b2.addEventListener('mouseover',function(){
    b2.style.backgroundColor="lightblue"
})
b2.addEventListener('click',function(){
    count--;
    
    test.textContent=count;
})



