var snacks = [];
//add an item
snacks.push('pistachios');
//add more than one item
snacks.push('avocados', 'tomatoes', 'chips');
//add to the front of the list with using the toUpperCase method
snacks.unshift('coffee'.toUpperCase());

snacks.pop();
//calling the function from day2app.js
printList(snacks);
