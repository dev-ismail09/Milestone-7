// localStorage.getItem('hello'); // error dibe karon localStorage akta brower API

const hello = localStorage.getItem('Hello');
console.log(hello);

const setAge = () =>{
    window.localStorage.setItem('age', 21);
}