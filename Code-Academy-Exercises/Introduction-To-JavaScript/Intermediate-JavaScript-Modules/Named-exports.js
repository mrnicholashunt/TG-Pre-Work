

let availableAirplanes = [
{
  name: 'AeroJet',
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  fuelCapacity: 800
 },
 {name: 'SkyJet',
  availableStaff: ['pilots', 'flightAttendants'],
  fuelCapacity: 500
 }
];

let flightRequirements = {
  requiredStaff: 4
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
}
export { availableAirplanes, flightRequirements, meetsStaffRequirements};

// ES6 also gave the ability to exports variable with named exports
