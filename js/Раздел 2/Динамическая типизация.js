"use strict";

// To String

//1) Команда String

console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2) Конкатенация - сложение со строкой

console.log("Конкатенация");
console.log(typeof(5 + ''));
console.log(typeof(null + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';// поместить в css

// To Number

//1) Команда Number

console.log(typeof(Number('4')));

//2) Унарный плюс - "+"

console.log(typeof(+'5'));

//3) Метод parseInt

console.log(typeof(parseInt('15px', 10)));

let answ = +prompt("Hello","");// строка

// To boolean

//  0, '', null, undefined, NaN - false

//1) Нативный способ
let switcher = null;

if (switcher){
    console.log("Working...");// не выполняется
}

switcher =  1;
if (switcher){
    console.log("Working...");// не выполняется
}

//2) Команда Boolean
console.log(typeof(Boolean('4')));

//3) Два знака отрицания
console.log(typeof(!!"4444"));


