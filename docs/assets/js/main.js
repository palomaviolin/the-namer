"use strict";const nameUserInput=document.querySelector("#search_input"),button=document.querySelector("#btn");function handledSearchUser(){const e=nameUserInput.value;fetch(`https://api.github.com/users/${e}`).then(e=>e.json()).then(e=>{document.querySelector(".user_name").innerHTML=e.name})}button.addEventListener("click",handledSearchUser);