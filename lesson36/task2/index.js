/* eslint-disable camelcase */
import  { fetchRepos, onSearch  }  from './getways.js'
import {renderer} from './user.js'

const btn = document.querySelector('.btn');

const defaultUser = {
    avatar_url: 'https://avatars3.githubusercontent.com/u10001' ,
    name : '',
    location: '',
}
renderer(defaultUser)




btn.addEventListener('click',onSearch)
