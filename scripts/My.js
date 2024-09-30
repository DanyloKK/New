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


const yourName = prompt(`Define your name`)
const yourPhoneNumber = prompt(`Insert your phone number`)
const yourCountryOfResidence = prompt(`Your country of residence`)
console.log(`${yourName },${yourPhoneNumber},${yourCountryOfResidence}`)


function splitName(digit) {
    let divide = digit.toString().split("");
    console.log(divide.join(" "));
}

splitName(10369);
splitName("Hello World")


const object1 = {
    name:"Danylo",
    age:22,
    games:{
        CS:16,
        GTA:5
    }
};

console.log(object1);
const object2 = {
    hobbies:"Gym",
    height: 177,
    power: {
        bench_press : 125,
        deadlift : 210
    }
}
console.log(object2);
const hasName = "height" in object2;

/*
const combo2 = {...object2};
combo2.weight = 178;
combo2.power.deadlift = 250;
console.log(combo2);

 */


const combo = Object.assign({object1},object2);
combo.power.squat = 210;
combo.hobbies = "football";
combo.object1.games.CS = 25;
console.log(combo);


/*
const pars = JSON.parse(JSON.stringify(object2));
pars.power.squat = 210;
console.log(pars);
*/

const array = [{
    cup: "white",
    bottle: "transperent",
    cheese: "melted"
},
"Hey",22,"Date"
]

console.log(array[1])


let mn = 5.4;
let mh = Math.floor(mn);
console.log(mh);


let str = "пплуцдшпоуцпшщопущшкрукдшпрукдпупркудпуклпклк";
console.log(str[5])

let hj = "Hello World"
let change = hj.replace("Hello", "Goodbye");
console.log(change);

let newStr = hj.slice(7,8);
console.log(newStr);

let oldStr = "42"
let oldStR = Number(oldStr);
console.log(oldStR);


let userParameters = {
    name:"Danylo",
    age:22,
    occupation:"IT"
}
let userParameters1 = {
    name:"Petr",
    age:27,
    occupation:"Marine"
}

let userParameters2 = {
    name:"Vasya",
    age:32,
    occupation:"Building"
}

let K = 32;
let H = 22;



if (K === H || K !== 24 && K === H) {
    console.log(userParameters1);
}else if (K < H && K >= H){
    console.log(userParameters1);
}else if (K <= H || K === null){
    console.log(userParameters2);
}else {
    console.log("Error");
}

let boy = 20;
for (; boy < 40; boy++) {
    if (boy === 30) break;
    console.log(boy);
}

let boy1 = 20;
for (; boy1 < 40; boy1 += 5) {
    if (boy1 % 1 === 0) continue;
    console.log(boy1);
}

let joy = 25;

do{
    console.log(joy);
    joy++
    if (joy === 44) break;
}while(joy < 100);



firstFor: for(let you = 0; you < 25; you++){
    for(let size = 0; size < 25 ; size++){
        if (size === 2){
            break firstFor;
        }
        console.log(size);
    }
console.log(you)
}



outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        if (j === 1) {
            continue outerLoop;  // Пропускает текущую итерацию внешнего цикла
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}


function showMessage(){
    console.log("Сообщение");
}
showMessage();


function getResult() {
    let num = 25;
    let num1 = 53535;
    let sum = num * num1;
    function getConsole(){
        let num2 = 5354;
        let num3 = 3334;
        let sum1 = num2 * num3;
        console.log(sum1);
    }
    function getDivide(){
        console.log(sum);
    }
    getDivide();
    getConsole();
}
getResult();

let message;
function getSms(){
    message = 55;
}
getSms()
console.log(message);

