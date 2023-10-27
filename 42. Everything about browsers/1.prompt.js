// alert('How are you'); // aita brower API aita js a colbe na aita calanor jonno function er modde use korte hobe

function showAlert(){
    alert('How are you');
}

// better version- bootstrap a model a khujle pabo

const lendMoney = () => {
    const result = confirm('Mama 500 tk dhar de'); // ok(true) & cancel(false)
    console.log(result);
    if(result === true){
        alert('Tui amar jan er dosto');
    }
    else{
        console.log("DGM");
    }
}

const getInfo = () =>{
    //alert
    //confirm
   const name = prompt('Tell me your name');
   console.log(name);
   if(name === null){
    alert('Name na dile kam nai!');
   }
   else{
    console.log( name , 'welcome to this world!!');
   }
}