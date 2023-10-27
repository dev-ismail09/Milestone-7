// ইচ্ছে মত লোড হবে - Asynchronous
// console.log(1);
// console.log(2);
// doSomeThing(3);
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
const timeoutID = setTimeout(()=> {
    console.log('lazy logged')
}, 4000);


let num = 0;
const intervalId = setInterval(()=>{
    console.log(++num);
    if(num === 10){
        clearInterval(intervalId);
    }
}, 1000);


// stop - clearTimeout(timeoutId)
console.log(4);
console.log(5);
console.log(6);

function doSomeThing(){
    console.log(3)
}


// Call Stack- ধারাবাহিকভাবে যাই - Synchronous

// function one(){
//     console.log('A');
//     two();
//     console.log('C');

// }

// function two(){
//     console.log('B');
// }
// one();

