"use strict";

const options = {
    name: 'test',
    width: 1024,
    heith: 1024,
    colors:{
        border:'black',
        bg:'red'
    },
    makeTest: function(){
        console.log("Test");
    }
};

// delete options.name;
// console.log(options);

// Вызвать самостоятельно написанный метод объекта
options.makeTest();

// Деструктуризация - вытащить значений подключей
const {border, bg} = options.colors;
console.log(border);

// Получить количество ключей верхнего уровня в объекте
console.log(Object.keys(options).length);

// Вытащить все значения объекта
for (let key in options){
    if(typeof(options[key])=== 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
       }
    }
    else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}