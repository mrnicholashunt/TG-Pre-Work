const Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());

//Had to use help for this and it erased my code. My error was in step 5 where I was supposed to put the code in mission control.js and not the airplane.js. Dumb.
