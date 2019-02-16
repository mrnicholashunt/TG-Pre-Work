const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if(typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
    }

};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);


// Setters allow us to reassign properties in an object. Setters can push values into object properties in many ways. it can perform actions, check inputs, and make its purpose clear for future reference
