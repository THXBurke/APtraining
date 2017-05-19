// var snacks = [];
//
// //add an item
// snacks.push('pistachios');
//
// //add more than one item
// snacks.push('avocados', 'tomatoes', 'chips');
//
// //add to the front of the list with using the toUpperCase method
// snacks.unshift('coffee'.toUpperCase());
//
// //removing from array
// // snacks.pop();
// // snacks.shift(); //repeat
// //calling the function from day2app.js
// printList(snacks);

///comment out --------> will conflict with above code and day2index.html
var staffFavorites = [
  ['Sausage', 'Jeremy'],
  ['Hard Boiled Eggs', 'Nate'],
  ['Noodle Bowls', 'Tanya'],
  ['Bacon', 'Not sure who cooks it but it sure smells good.']
];

function print(message) {
  document.write(message);
}

  function printList(favorites) {
    var listHTML = '<ol>';
    for (var i = 0; i < favorites.length; i += 1) {
      listHTML += '<li>' + favorites[i][0] + ' : ' + favorites[i][1] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
  }

  printList(staffFavorites);
