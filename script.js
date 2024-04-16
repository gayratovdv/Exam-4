let a = 5;
b = a % 2;


alert("Birinchi masala: ")
alert("5 ni 2 bo'lgandagi qoldiq: " + b);


let random1 = Math.floor(Math.random() * 10)

alert("Ikkichi masala: ");
alert("1 dan 10 gacha random son bu: " + random1);


let floor = 12.510;
let trunc = Math.trunc(floor);

alert("Uchinchi masala: ");
alert(trunc);



function countLetters(text) {
    const onlyLetters = text.replace(/[^a-zA-Z]/g, '');
    return onlyLetters.length;
}

const letterCount = countLetters("MARS IT SCHOOL");

alert("To'rtinchi masala: ");
alert(letterCount);



let leave = "MARS IT SCHOOL";

function ten () {
    for (let i = 0; i < 10; i ++) {
        console.log(leave);
    }
}

ten();

const array = [];
let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]
array.push(harflar[8]);
array.push(harflar[0]);
array.push(harflar[20]);
array.push(harflar[13]);
array.push(harflar[6]);
array.push(harflar[7]);
array.push(harflar[16]);
array.join("")
console.log("Oltinchi masala.. ");
console.log(array);



alert("Yettinchi masala.. ")

let yosh = prompt("yoshingizni kiriting");
if (yosh > 18) {
    alert("Siz balag'ot yoshiga yetgansiz");
}else  {
    alert("siz balog'at yoshiga yetmagansiz")
}

alert("Sakkizinchi masala.. ")
let ism = prompt("Ism kiriting");
let teskari = ism.split("").reverse("");
console.log(teskari);



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const juftson = [];
for (const number of numbers) {
    if (number % 2 == 0) {
        juftson.push(number);
    }
}

console.log("O'ninchi masala... ");
console.log(juftson);