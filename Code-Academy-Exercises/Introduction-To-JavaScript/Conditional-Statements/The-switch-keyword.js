let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
  break;
  default:
    console.log('No medal awarded.');
    break;
}
// the switch keyword is used to simplify the else if statement. It can check many cases to see what criteria is met and return a value if so.
