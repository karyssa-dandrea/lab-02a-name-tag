const nameInput = document.getElementById('name-input');
console.log(nameInput);


const nameValue = document.getElementById('name');

const updateButton = document.getElementById('update-button');

updateButton.addEventListener('click', () => {
    const value = nameInput.value;
    nameValue.textContent = value;
});
