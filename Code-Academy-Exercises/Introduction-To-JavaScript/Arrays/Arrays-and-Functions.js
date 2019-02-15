const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);
function removeElement(newArr){
  newArr.pop();
}
removeElement(concept);
console.log(concept);
// If an array is mutated withing the function, it will remain that way when the function is called
