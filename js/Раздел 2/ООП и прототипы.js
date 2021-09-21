"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log("Hello");
    }
};

// const john = {
//     health:100
// };
const john = Object.create(soldier);

//john.__proto__ = soldier;// устаревший вид
Object.setPrototypeOf(john, soldier);// современный формат

john.sayHello();