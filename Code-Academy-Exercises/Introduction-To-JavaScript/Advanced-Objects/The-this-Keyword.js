const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};
console.log(robot.provideInfo());


// .this keyword allows us to add a method to an object by saying this object needs to have a key that points to another key inside the object. The when called upon, this new key can access the other keys value
