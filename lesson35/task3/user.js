
/* eslint-disable camelcase */
const nameElem = document.querySelector('.user__name');
const locationElem = document.querySelector('.user__location');
const imgElem = document.querySelector('.user__avatar')

export const renderer = (userData)=>{
    const {avatar_url,name,location} = userData;
imgElem.src = avatar_url;
nameElem.textContent =name;
locationElem.textContent =location;

}