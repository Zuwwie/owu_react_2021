const url = 'https://jsonplaceholder.typicode.com/posts'

const getAllPosts = () => {
  return fetch(url).then(value => value.json())
}

export {getAllPosts}