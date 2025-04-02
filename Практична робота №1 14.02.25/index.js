let number = 22;
let m = 1/22;
let massage = "Heyyy";
let byl = false;
number = 28;
m = 8/28;
massage = "Buyyy";
byl = true;

console.log(typeof number);
console.log(typeof m);
console.log(typeof byl);
console.log(typeof massage);

let konkatencia = number + massage;
m = "Hi";
byl = 12;

let obgct = {
    name: "Viktoria",
    age: 17,
    city: "Lutsk",
    unemployed: true,
}
console.log(JSON.stringify(obgct));

let number1 = prompt("Введіть перше число:")
let number2 = prompt("Введіть друге число:")
let number3 = prompt("Введіть третє число:")

let auf = number1 + number2 + number3 / 3;
console.log(auf);

let abs;
if (number1 < 0) {
   abs = -number1;
} else {
    abs = number1;
}
let ceilNumber2;
if (number2 % 1 === 0) {
   ceilNumber2 = number2;
} else {
    if (number2 > 0) {
        ceilNumber2 = parseInt(number2) + 1;
    } else {
        ceilNumber2 = parseInt(number2);
    }
}
let floorNumber3;
if (number3 % 1 === 0) {
    floorNumber3 = number3;
} else {
    floorNumber3 = parseInt(number3);
}
let pow = number1;
for (let auf = number2; auf > 1; auf --) {
    pow *= number1;
}

if (number1 % 10 == 0);
if (number2 % 5 == 0); 

let a=4, b=8, c=16;
if (a + b > c && a + c > b && b + c > a) {
    console.log("Трикутник існує");  
} 
else {
    console.log("Трикутник не існує")
}

let op1 = prompt("Введіть першу будь-яку цифру!");
let op2 = prompt("Введіть другу будь-яку цифру!");
let op3 = prompt("Введіть третю будь-яку цифру!");
let nit = Math.max (op1, op2, op3);
let nif = Math.min (op1, op2, op3);

let mum = op1 % 2 === 0 || op2 % 2 === 0 || op3 % 2 === 0;
console.log(mum);

let hor = op1 > op2 && op2 < op3;
console.log(hor)

function isPrime(num) {
   if (num <= 1) return false;
   for (let i = 2; i <= Math.sqrt(num); i ++) {
    if (num % 1 === 0) return false;
   }
   return true;
}
console.log(isPrime(op1));

let name = prompt("Введіть ваше ім'я:")
console.log(name);
let birthday = prompt("Введіть ваш рік народження:")
let city = prompt("Введіть ваше місце проживання:")

let year = new Date().getFullYear();
let age = year - birthday; 
console.log(age);

let grps; 
if (age < 13) {
    grps = "Дитина";
} else if (age < 18) {
    grps = "Підліток";
} else if (age < 50) {
    grps = "Дорослий";
} else {
    grps = "Літня людина";
}
if (age < 1 || age > 105 || isNaN(age)) {
    console.log("Некоректний вік!")
    }
console.log(grps);

let capitals = {
Ukraine: "Kyiv",
France: "Paris",
Italy: "Rome"
};

let cities = "Kyiv";
let countryName = null;
for (let country in capitals) {
    if (capitals[country] === city) {
        countryName = country;
        break;
    }
}
if (countryName) {
    console.log(`${city} - це столиця ${countryName}.`);
} else {
    console.log(`${city} - це не столиця.`)
};