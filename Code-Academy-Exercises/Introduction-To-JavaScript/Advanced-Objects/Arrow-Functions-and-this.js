const robot = {
  energyLevel: 100,
  checkEnergy(){
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();


// The arrow function binds the .this function to itself even if it is nested in an object. Avoid using this function
