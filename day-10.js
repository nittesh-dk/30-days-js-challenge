// Here is the formatted text focusing only on the tasks and feature requests:

// ### Tasks/Activities:

// #### Activity 1: Basic Event Handling
// - **Task 1**: Add a click event listener to a button that changes the text content of a paragraph.

document.querySelector('button').addEventListener('click',()=>{document.querySelector('p').style.color = 'red'})



// - **Task 2**: Add a double-click event listener to an image that toggles its visibility.

let toggell = true;
const imgElement = document.querySelector('img');

imgElement.addEventListener('dblclick', () => {
    if (toggell) {
        imgElement.style.opacity = 0;
    } else {
        imgElement.style.opacity = 1;
    }
    toggell = !toggell; // Update toggell here
});


// #### Activity 2: Mouse Events
// - **Task 3**: Add a mouseover event listener to an element that changes its background color.

document.querySelector('h1').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'blue'
})

// - **Task 4**: Add a mouseout event listener to an element that resets its background color.

document.querySelector('h1').addEventListener('mouseout', function() {
    this.style.backgroundColor = ''
})



// #### Activity 3: Keyboard Events

// - **Task 5**: Add a keydown event listener to an input field that logs the key pressed to the console.
// document.querySelector('input').addEventListener('keydown', function() {
//     console.log(this.value)
//     this.value = ''
// })


// - **Task 6**: Add a keyup event listener to an input field that displays the current value in a paragraph.

// document.querySelector('input').addEventListener('keyup', function() {
//     console.log(this.value)
// document.querySelector('p').innerText = this.value
// })


// #### Activity 4: Form Events

// - **Task 7**: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

document.querySelector('#myform').addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(this)

    console.log(data);


})


// - **Task 8**: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

document.querySelector('#mySelect').addEventListener('change', (e) => {
    document.querySelector('#selectedValue').textContent = `Selected value: ${e.target.value}`;
});

// #### Activity 5: Event Delegation
// - **Task 9**: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
document.querySelector('#myList').addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'LI') {
        console.log(e.target.textContent);
    }
});

// - **Task 10**: Add an event listener to a parent element that listens for events from dynamically added child elements.

document.querySelector('#parentElement').addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('childElementClass')) {
        console.log('Clicked on a dynamically added child element');
    }
});
