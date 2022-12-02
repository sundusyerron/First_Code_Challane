//Challenge 2: Speed Detector (Toy Problem)
//here we calculate speed of a car 
//lets speed of a car is 80;
const prompt = require('prompt-sync')();
//get speed as input
let speed =prompt("please enter speed");
function speedOfAcar(){
let speedOfAcar = 80;
let demeritPointsOfCar = (speedOfAcar - 70)/5;
//using if statemnt..if speedOfAcar is less than 70; we  print "Ok";
if(speedOfAcar<70){
    console.log("Ok");
  }
  //otherwise we prints points if points exceeds 12,we print liscences suspended..for every 5 km/hr above speed limit 70km/hr,
  else {
    console.log("demeritPoint:" + demeritPointsOfCar);
  //if the points exceeds 12 we print licences suspended
   if (demeritPointsOfCar > 12 ){
  console.log("licence suspended");
  }
}
}
speedOfAcar();


