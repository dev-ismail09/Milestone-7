const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    //
    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';

}


localStorage.setItem('friends', JSON.stringify([12, 34, 64]));
const pen = {price: 10, color: 'black'};
localStorage.setItem('pen', JSON.stringify(pen));
// update pen value

pen.price = 50;
localStorage.setItem('pen', JSON.stringify(pen));
