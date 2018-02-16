/*
We are going to write a calculator that calculates sleep debt. 

The program will ask a user how many hours of sleep is ideal each night, then compare that to the actual hours they slept each night of the last week.

Then, it will calculate the number over or under they are to their sleep goal.
 */

const getSleepHours = day => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 6;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 7;
      break;
    case "friday":
      return 6;
      break;
    case "saturday":
      return 10;
      break;
    case "sunday":
      return 7;
      break
    default:
      return "day not recognised"
  }
};

const getActualSleepHours = () => getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");

const getIdealSleepHours = () => {
  var idealHours = 7;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours();
  var idealHours = getIdealSleepHours();
  
  console.log("Actual Sleep Hours = " + actualSleepHours)
  console.log("Ideal Sleep Hours = " + idealHours)
  
  if (actualSleepHours === idealHours) {
    return "You got the perfect amount of sleep!"
  } else if (actualSleepHours > idealHours) {
    return "You got more than enough sleep, you lucky sausage!"
  } else {
    return "You should get some rest!"
  }
};

console.log(calculateSleepDebt())