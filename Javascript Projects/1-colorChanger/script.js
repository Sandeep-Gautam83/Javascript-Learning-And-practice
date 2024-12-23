// Select all buttons with the class 'button'
const buttons = document.querySelectorAll('.button');

// Select the body element
const body = document.querySelector('body');

// Add a click event listener to each button
buttons.forEach(function (button) {
  console.log(button); // Log each button to the console
  button.addEventListener('click', function (e) {
    console.log(e); // Log the event object
    console.log(e.target); // Log the clicked element

    // Check the ID of the clicked button and change the background color
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
