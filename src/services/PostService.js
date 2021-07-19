export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  getAllPosts() {
    return fetch(this.url)
      .then(value => value.json())
      .then(value => value.slice(0, 10))
      .then(value => value)
  }

}