
/* eslint-disable camelcase */
const nameElem = document.querySelector('.user__name');
const locationElem = document.querySelector('.user__location');
const imgElem = document.querySelector('.user__avatar')

export const renderer = (userData)=>{
    const {avatar_url,name,location} = userData;
imgElem.src = avatar_url;
if(name){
    nameElem.textContent =name;
}
else{
    nameElem.textContent ='';
}
if(location){
    locationElem.textContent =location;
}
else{
    locationElem.textContent ='';
}

locationElem.textContent =location;

}