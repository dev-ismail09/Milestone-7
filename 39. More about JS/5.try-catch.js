function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');

    try{
        // console.log(bfasd); // aita error dibe , amon mone hole seita try e bosabo

        const age = parseInt(ageText);

        if(isNaN(age)){
            // console.log('age not found', age, ageText);
            throw 'Please enter a number';
        } // try er modde abar pothom code error hoile porer code gula run hobe na
        else if(age < 18){
            throw 'Boyos hoi nai vago';
        }
        else if(age > 30){
            throw 'murobbi allow nai';
        }
        errorTag.innerHTML = ''; 
    }
    catch(err){
        console.log('ERROR:', err);
        errorTag.innerHTML = 'ERROR:' + err;
    } // try te jodi error khai taile catch a asbe r na hole asbe na
    finally{
        console.log('All Done inside try catch');
    } // finally mane thakbei thakbe

    console.log(1111);
}