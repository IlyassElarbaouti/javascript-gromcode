/* eslint-disable no-return-await */
/* eslint-disable camelcase */
import {renderer } from './user.js'
import {reposRender , cleanReposList } from './repos.js'
import {showSpinner , hideSpinner} from './spinner.js'

const inputElem = document.querySelector('.name-form__input');
const baseUrl = 'https://api.github.com/users/';


export const fetchRepos = async url=>{
   const response =await  fetch(url)
        if(response.status===200){return await response.json()};
        throw new Error('Failed to load data')
    }

export const fetchUserData = async (userName)=>{
    const response = await  fetch(baseUrl+userName)
        if(response.status===200){return await response.json()};
        throw new Error('Failed to load data')
    
}

export const onSearch =async ()=>{
    cleanReposList();
    showSpinner();
    const userName = inputElem.value;
    inputElem.value = '';
    try{
    const userData = await fetchUserData(userName);
    renderer(userData);
    const reposList = await fetchRepos(userData.repos_url);
    reposRender(reposList);
    }
   catch(err){
       alert(err.message)
   }
   finally{
       hideSpinner();
   }

    // fetchUserData(userName)
    // .then(data=>{renderer(data)
    //     return data.repos_url
    // })
    // .then(url=>fetchRepos(url))
    // .then(reposList=>{
    //     console.log(reposList)
    //     reposRender(reposList)
    // })
    // .catch(err=>{alert(err.message)
    // })
    // .finally(
    //      hideSpinner()
    // );
}
