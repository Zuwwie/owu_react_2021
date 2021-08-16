const url = 'https://jsonplaceholder.typicode.com/posts/'

const getCommentsOfPost  = (id) => {
  return fetch(url + id + `/comments`).then(value => value.json())
}
export {getCommentsOfPost}