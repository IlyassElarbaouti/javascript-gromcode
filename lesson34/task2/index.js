const user1 = {
    email:'mrfixer59@gmail.com',
    firstName:'Ilyass',
    lastName:'Elarbaouti',
    age:22,
}

const baseUrl = 'https://6145d36c38339400175fc71d.mockapi.io/api/v1/users/';

export function getUsersList() {
  // put your code here
  return fetch(baseUrl)
  .then(data=>data.json())
}

export function getUserById(userId) {
  // put your code here
  return fetch(baseUrl+userId)
  .then(data=>data.json())
}

export function createUser(userData) {
  // put your code here
  return fetch(baseUrl,{
      method:'POST',
      headers:{"Content-type": "application/json; charset=UTF-8"},
      body:JSON.stringify(userData)
  });
}


 export function deleteUser(userId) {
  fetch(baseUrl+userId,{
  method:'DELETE',
  })
}


export function updateUser(userId, userData) {
  // put your code here
  fetch(baseUrl+userId,{
      method: 'PUT',
      body:JSON.stringify(userData)
  })
}

// examples
// getUsersList().then(users => {
//   console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
// });

// getUserById('2').then(userData => {
//   console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
// });

// const newUserData = {
//   email: 'cool@email.com',
//   firstName: 'Iron',
//   lastName: 'Man',
//   age: 42,
// };

// createUser(newUserData).then(() => {
//   console.log('User created');
// });

// const updatedUserData = {
//   email: 'new@email.com',
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 17,
// };

// updateUser('1', updatedUserData).then(() => {
//   console.log('User updated');
// });

// deleteUser('2').then(() => {
//   console.log('User updated');
// });