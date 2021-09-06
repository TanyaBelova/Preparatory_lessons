"use strict";

//Function Declaration

// function showFirstMessage(text){
//     console.log(text);
// }

// showFirstMessage("Hello world");

// function calc(a,b){
//     return a + b;
// }

// console.log(calc(5,5));

// function ret(){
//     let num =50;
//     return num;
// }


//Function Expression

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function(){

// };

//Стрелочные функции

// const calc = (a,b)=>a+b;
// const calc2 = a=>a+b;
// const calc3 = (a,b)=>{
//   return a+b;
// };

//Callback-функции

function first(){
  setTimeout(function(){
    console.log(1); 
    },500);
}

function second(){
  console.log(2);
}

first();
second();

function learnJS(lang, callback){
  console.log(`Я учу ${lang}!`);
  callback();
}

function done(){
  console.log("Я прошел этот урок!");
}

learnJS('JavaScript', done);
