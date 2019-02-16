let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil'
};
let remotelyDisable = obj => {
  obj.disabled = true
};

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);


// objects are passed by reference. This means we can alter the information inside the object even if that object variable was set to contant. The info contained inside is mutable by functions that pass by the object to putt info
