//selecting the element 'interactiveHeading'
//document is a global variable representing the current webpage
//the get element by id method belongs to the document object
//arrow function example
var interactiveHeading = document.getElementById('interactiveHeading');

interactiveHeading.addEventListener('click', () => {
  interactiveHeading.style.color = 'red';
});
////////
var myButton = document.getElementById('myButton');

  myButton.addEventListener('click', function() {
    interactiveHeading.style.color = 'green';
  });
///////these are just comments and aren't red by the JS interpreter so you can keep notes here to make your code ///////more readable for yourself and others.
//accessing the value property of the element
//access the constent in the script in the console ex: myTextInput.value
var myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', function() {
  interactiveHeading.style.color = myTextInput.value;
});

//////Select all elements of a certain type
// var interactiveHeading = document.getElementsByTagName('h1')[0];

var myList = document.getElementsByTagName('li');
  for (var i = 0; i < myList.length; i +=1) {
  myList[i].style.color = 'green';
}

//using CSS Queries to Select Page elements. Can switch (even to odd).
//also ex: of using const & let keywords in place of var
const evens = document.querySelectorAll('li:nth-child(even)');
  for (let i = 0; i < evens.length; i += 1) {
    evens[i].style.backgroundColor = 'lightgray';
  }
