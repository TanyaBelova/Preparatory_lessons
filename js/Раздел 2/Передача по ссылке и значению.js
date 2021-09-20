"use strict";

// Копия объекта

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // Ссылка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj){
    let objCopy = {};

    let key;

    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a:2,
    b:5,
    c:{
        x:7,
        y:4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10; // изменит первоначальный объект, т.к. хранится ссылка на с. Копия является поверхностной

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

//console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 20;

console.log(clone);
console.log(add);

//Копия массивов

const oldArray = ['a','b','c'];
const newArray = oldArray.slice();

newArray[1] = 'fdghufhuhguifg';

console.log(oldArray);
console.log(newArray);

// Оператор Spread
const video = ['youtube', 'vineo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,5,7];
log(...num); 

const array = ["a", "b"];
const newAarray = [...array];// поверхностная копия

const q = {
    one: 1,
    two: 2,
    three: {
        four: 4,
        five: 5
    }
};

const newObj = {...q}; // поверхностная копия
newObj.three.four = 10;

console.log(q);
console.log(newObj);

