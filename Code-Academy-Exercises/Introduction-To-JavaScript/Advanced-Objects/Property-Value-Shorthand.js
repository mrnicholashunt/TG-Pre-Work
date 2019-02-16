function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)


// ES6 allowed us to shorten how much data is needed to create objects.In a factory, instead of typing out a property name twice, we can do it once followed by a comma and it will be interpreted correctly still.
