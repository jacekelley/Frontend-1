/* local Storage Examples */

localStorage.setItem('level', 0);

localStorage.setItem('level', 7);

const levelElement = document.getElementById('level_output');

levelElement.textContent = localStorage.getItem('level');

localStorage.removeItem('user');

const user = {
    name: 'John',
    age: 30,
    favoriteColor: 'blue'
};

//storage

localStorage.setItem('user', JSON.stringify(user));

//retrieve

const storedUser = JSON.parse(localStorage.getItem('user'));

console.log(storedUser.name); // Output: John