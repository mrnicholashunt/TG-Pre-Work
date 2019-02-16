import Airplane from './airplane';
function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}
displayFuelCapacity();

// ES6 also simplified the require method by using the keyword import
