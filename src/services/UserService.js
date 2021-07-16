export class UserService {

  url = 'https://jsonplaceholder.typicode.com/users';

  getAllUsers() {
    return fetch(this.url)
    .then(value => value.json())
    .then(value => {return value});
  }

  getUserById(users, id) {
    return users.find(user => user.id === id);
  }

}