const robotFactory = (model, mobile) => {
  return {
    model : model,
		mobile: mobile,
		beep () {
      console.log('Beep Boop');
    }
	};
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();

console.log(tinCan);


// Factory functions allow us to creat many instances of objects.
// We can designate an object to create many copies of itself quickly with basic inputs.
// In the example above, it takes 6 lines of code to creat an object and the factory function allows us to creat an object based on this template in one line
