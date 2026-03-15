// //     // // console.dir(document); //this gives all the info about the page
// //     // // console.log(document.domain); //gives the domain name
// //     // // console.log(document.URL);//gives the URL of the page
// //     // // console.log(document.title); //gives the title of the page
// //     // // console.log(document.doctype); //gives the doctype of the page
// //     // //console.log(document.head); //gives the head of the page
// //     // // console.log(document.body); //gives the body of the page 
// //     // // console.log(document.all); //gives all the elements in the page
// //     // // console.log(document.forms);//gives the forms in the page
// //     // // console.log(document.links); //gives the links in the page
// //     // //  console.log(document.images); //gives the images in the page

// //     // //GETELEMENTBYID
// //     // var headertitle=document.getElementById('header-title');
// //     // var h1=document.getElementById('main-header');
// //     // var b1=document.getElementById('btn1');

// //     // // headertitle.textContent="hello";
// //     // // headertitle.innerText='byee';
// //     // // console.log(headertitle.textContent); //gives the text content of the element
// //     // // headertitle.innerHTML='<h3>Helloo</h3>';//gives the html content of the element

// //     // h1.style.borderBlockWidth = '4px';
// //     // h1.style.borderBlockColor = 'black';
// //     // h1.style.borderBlockStyle = 'solid';
// //     // b1.style.backgroundColor = 'black'; // Set initial background to black
// //     // b1.addEventListener('mouseover', function() {
// //     //     b1.style.backgroundColor = 'red';
// //     // });
// //     // b1.addEventListener('mouseout', function() {
// //     //     b1.style.backgroundColor = 'black';
// //     // });


// //     // //GETELEMENTSBYCLASSNAME
// //     // var items = document.getElementsByClassName('List-items');

// //     // items[1].textContent = 'hello2';
// //     // items[1].style.fontWeight = 'bold';
// //     // items[1].style.backgroundColor = 'yellow';

// //     // for(var i=0; i<items.length; i++){
// //     //     items[i].style.backgroundColor = 'grey';
// //     // }

// // //GETELEMENSTBYTAGNAME
// // var l=document.getElementsByTagName('li');
// // l[0].textContent='hello1';
// // l[1].textContent='hello2';
// // l[2].textContent='hello3';
// // l[3].textContent='hello4';
// // l[4].textContent='hello5';

// //QUERYSELECTOR
// var header=document.querySelector('#main-header');
// header.style.borderBlockWidth = '4px';
// header.style.borderBlockColor = 'black';
// header.style.borderBlockStyle = 'solid';
const li = document.createElement('li')

li.textContent = "New Task"

document.querySelector('ul').appendChild(li)
