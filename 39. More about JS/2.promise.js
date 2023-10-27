const getData = new Promise((resolve, reject) =>{
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
         resolve(5);
    }
    else{
        reject('No data avaiable')
    }
})

getData
 .then(data => console.log(data + 10))
 .catch(err => console.log('ERR:', err))