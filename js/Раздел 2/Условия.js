// const num = 50;

// if (num < 49){
//     console.log('Error');
// } else if(num > 100){
//     console.log('Много');
// } else {
//     console.log('Ок');
// }

// (num === 50) ? console.log('Ок'): console.log('Error');

const num = 50;

switch(num){
    case 49: 
        console.log('Неверно!');
        break;
    case 100: 
        console.log('Много!');
        break;
    case 51: 
        console.log('В точку!');
        break;
    default: 
        console.log('Не в этот раз!');
        break;
}