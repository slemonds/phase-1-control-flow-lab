function scuberGreetingForFeet(number){
  // Write your code here!
  if (400 >= number){
    return 'This one is on me!';
  } else if (400 < number && number <= 2000){
    return 'That will be twenty bucks.';
  } else if (2000 < number && number <= 2500){
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC'?'Ok, sounds good.':'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return "Bye."
  }
}