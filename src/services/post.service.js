const url = `https://jsonplaceholder.typicode.com/posts`;


const getPostsFilter = () => {
    return fetch(url).then(value => value.json())
}

export {getPostsFilter}