// Write your code below

let bobsFollowers = ['Bill', 'Ted', 'Tony', 'Steve'];
let tinasFollowers = ['Bill', 'Ted', 'Kim'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
console.log(mutualFollowers)


// Nested loops are loops running inside of loops. This is particularyly handy for compairing multiple arrays.
