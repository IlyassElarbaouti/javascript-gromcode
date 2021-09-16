const btn = document.querySelector('.name-form__btn');
const input = document.querySelector('.name-form__input');
const img = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
const location = document.querySelector('.user__location');

const fetchData=()=>{
    const userInput = input.value;
    const url=`https://api.github.com/users/${userInput}`;
    return fetch(url)
    .then(data=>data.json())
}
const renderData=()=>{
    fetchData()
    .then(userData=>{
        img.src=userData.avatar_url;
        userName.textContent=userData.name;
        location.textContent=userData.location?`from ${userData.location}`:'';

    });
}


btn.addEventListener('click',renderData)