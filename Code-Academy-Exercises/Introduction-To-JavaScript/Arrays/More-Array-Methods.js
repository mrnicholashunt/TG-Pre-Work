const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList.slice(1, 4));

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex)


// .shift will remove the first item in an array
// .unshift will add to the beginning of an array
// .slice will allow you to only display select items in an array
