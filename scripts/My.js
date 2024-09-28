"use strict";
const myName = "Danylo"
console.log(typeof myName);
const myAge = 5;
console.log(typeof myAge);
const nothing = null;
console.log(typeof nothing);
let myPhoneNumber;
console.log(typeof myPhoneNumber);
const parameter = {
    gender: "male",
    height: "180cm",
    hobbies: "Gym"
}
console.log(typeof parameter);
const myNameIsDanylo = true;
console.log(typeof myNameIsDanylo);
function sum (){
    const a = 543;
    const b = 22.5;
    const multiple = a + b;
    console.log(multiple)
}
console.log(typeof sum);


const yourName = prompt("Define your name")
const yourPhoneNumber = prompt("Insert your phone number")
const yourCountryOfResidence = prompt("Your country of residence")
console.log("${yourName },${yourPhoneNumber},${yourCountryOfResidence}")


function splitName (digit){
    let divide = digit.toString().split("");

    console.log(divide.join(" "))
}
splitName(10369);

