const x = 'Pori';
const y = 'moni';
// console.log(z); // Cannot access 'z' before initialization
const z = 'Raj';



// but var halai onek fajil

// console.log(name);
// var name = 'Ismail Hosen';


// function call work good no problem
console.log(add(2,3));

function add(n1, n2){
    return n1 + n2;
}

// console.log(add2(2,3)); // Cannot access 'add2' before initialization
const add2 = (n1, n2) => n1 + n2;


function doSomething(){
    const sum = 55;
}
console.log(sum); //sum is not defined 
