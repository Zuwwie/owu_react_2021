const url = `https://jsonplaceholder.typicode.com/`;


const getPostsFilter = () => {
    return fetch(url + `posts`).then(value => value.json())
}

export {getPostsFilter}