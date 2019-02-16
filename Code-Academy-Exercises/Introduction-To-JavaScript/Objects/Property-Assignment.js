let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 6;
delete spaceship['Secret Mission'];


// object properties are mutable even after we have defined key values by using dot or bracket notation followed by = new value. If the key already exists in the object, the value will be reassigned. If the key does not already exist, it will add the new key and value to the object
