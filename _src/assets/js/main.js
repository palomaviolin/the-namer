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
  });
        
};


button.addEventListener('click', handledSearchUser);


/*
let sentence = document.querySelector('.user_name');
sentence.innerHTML = divideCharacters () {
    sentence.split(" ");
    let pieces = sentence.split("");
}
*/ 