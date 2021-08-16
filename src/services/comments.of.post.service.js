const url = 'https://jsonplaceholder.typicode.com/posts/'

const getCommentsOfPost  = (id) => {
  return fetch(url + 1 + `/comments`).then(value => value.json())
}
export {getCommentsOfPost}