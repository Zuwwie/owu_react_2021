const url = 'https://jsonplaceholder.typicode.com/';

const getPostsOfUser = (id) => {
  return fetch(url + `users/` + id + `/posts`).then(value => value.json())
};

export {getPostsOfUser}
