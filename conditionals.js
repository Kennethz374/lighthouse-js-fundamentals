const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}
if (cold){
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

//logical operator
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18){
  console.log("You are elighible to vote.");
}

//example of OR
const temp = 80;

if (temp < -40 || temp > 40){
  console.log("Maybe going outside isn't such a great idea...");
}

//Not operator
if (!raining){
  console.log("Leave your umbrella at home!");
}
