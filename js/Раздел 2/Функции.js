"use strict";

//Function Declaration

// Объявили функцию
function showFirstMessage(text){
    console.log(text);
}

// Вызвали функцию
showFirstMessage("Hello world");

// Объявили функцию
function calcTwoNumber(a,b){
    return a + b;
}

// Вызвали функцию
console.log(calcTwoNumber(5,5));

// Функция, возвращающая результат
function ret(){
    let num =50;
    return num;
}


// Function Expression

const anotherNum = ret();
console.log(anotherNum);

const logger = function(){

};

// Стрелочные функции
const calc = (a,b)=>a+b;
const calc2 = a=>a+5;
const calc3 = (a,b)=>{
  return a+b;
};

//Callback-функции
function first(){
  setTimeout(function(){
    console.log(1); 
    },500);
}

function second(){
  console.log(2);
}

// При вызове функции вторая с задержкой
first();
second();

//Функция done вызывается только после завершения выполнения функции learnJS
function learnJS(lang, callback){
  console.log(`Я учу ${lang}!`);
  callback();
}

function done(){
  console.log("Я прошел этот урок!");
}

learnJS('JavaScript', done);
