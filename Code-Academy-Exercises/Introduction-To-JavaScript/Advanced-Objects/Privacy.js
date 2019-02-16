const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robot._energyLevel = 'high';
robot.recharge();


// Some languages have built in privacy for objects, however, js does not. js relys on naming conventions to signal to developers how to interact with certain objects. One common way is to use an underscore in the name of a property.
