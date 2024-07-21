// Day 9: DOM Manipulation Questions

// Activity 1: Selecting and Manipulating Elements

// How do you select an HTML element by its ID and change its text content?

let p = document.getElementById("para") 
console.log(p)
p.style.color = 'red'

// How do you select an HTML element by its class and change its background color?

 let paraSelectedByClass = document.getElementsByClassName('paraClass') 
//  console.log(paraSelectedByClass)

//   ! by using  cllass slctor we get an html collection in the form fo array 
paraSelectedByClass[0].style.color = "blue"
 
// Activity 2: Creating and Appending Elements

// How do you create a new div element with some text content and append it to the body?
let div = document.createElement('div');
div.innerText = ' hello this is  the div is created by js '
div.style.color = 'green';
document.querySelector('body').appendChild(div)


// How do you create a new li element and add it to an existing ul list?

let li = document.createElement('li');
li.innerText = 'Chickuu';
document.querySelector('ul').appendChild(li)
// Activity 3: Removing Elements

// How do you select an HTML element and remove it from the DOM?

document.querySelector('p').remove();
// How do you remove the last child of a specific HTML element?

document.querySelector('ul').lastChild.remove();

// this is the done by using elelemnt .lastchild and alsoby using  the .rmovr function

// Activity 4: Modifying Attributes and Classes

// How do you select an HTML element and change one of its attributes (e.g., src of an img tag)?

document.querySelector('img').setAttribute('src','https://tse4.mm.bing.net/th?id=OIP.5eNmhCpnF-Iz48d9mQUg6wHaI9&pid=Api&P=0&h=180')


// How do you add and remove a CSS class to/from an HTML element?

document.querySelector('.headingxl').classList.add('theheadingWhichisxl')
document.querySelector('.headingxl').classList.remove('headingxl')


//  let res = document.querySelector('.headingxl').classList.contains('theheadingWhichisxl')
 let res = document.querySelector('.theheadingWhichisxl').classList.contains('headingxl')
  console.log(res)

// Activity 5: Event Handling

// How do you add a click event listener to a button that changes the text content of a paragraph?
document.querySelector('.changeText').addEventListener('click', function () {
    this.innerText = "this is change via click event"
})


// How do you add a mouseover event listener to an element that changes its border color?
document.querySelector('.heading').addEventListener('mouseover', function () {
    this.style.borderWidth = '2px';
    this.style.borderStyle = 'solid';
    this.style.borderColor = 'red';
});
