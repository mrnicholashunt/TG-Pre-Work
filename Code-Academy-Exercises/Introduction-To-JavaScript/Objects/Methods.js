let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};
alienShip.retreat();
alienShip.takeOff();


// Methods are functions stored in an object properties. This is what is used during console.log(). The object 'console' is being called to use the log function.
