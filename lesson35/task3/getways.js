/* eslint-disable camelcase */
import {renderer } from './user.js'
import {reposRender , cleanReposList } from './repos.js'
import {showSpinner , hideSpinner} from './spinner.js'

const inputElem = document.querySelector('.name-form__input');
const baseUrl = 'https://api.github.com/users/';
const list = document.querySelector('.repo-list')


export const fetchRepos = url=>
    fetch(url)
    .then(data=>data.json());

export const onSearch = ()=>{
    cleanReposList();
    showSpinner();
    const userName = inputElem.value;
    inputElem.value = ''
    fetch(baseUrl+userName)
    .then(response=>response.json())
    .then(data=>{renderer(data)
        return data.repos_url
    })
    .then(url=>fetchRepos(url))
    .then(reposList=>{
        console.log(reposList)
        reposRender(reposList)
        hideSpinner()
    })
    .catch(err=>{alert(err.message)
        hideSpinner()
    });
}


