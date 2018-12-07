'use strict';

const nameUserInput = document.querySelector('#search_input');
const button = document.querySelector('#btn');

function handledSearchUser() {
    const username = nameUserInput.value;
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            const name = document.querySelector('.user_name');
            name.innerHTML = data.name;

            let formattedName = data.name.split(' ')[0];
            let splittedName = formattedName.trim().split('');

            let letterList = document.body.querySelector('.letter-list');
            let listItems = '';
            for (let letter of splittedName) {
                listItems += `<li class="li">${letter}</li>`;
            }
            letterList.innerHTML = listItems;

            console.log(formattedName)
        });

}

button.addEventListener('click', handledSearchUser);

