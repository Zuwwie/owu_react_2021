const url =  `https://jsonplaceholder.typicode.com/`;

const getCommentsFillter = () => {
    return fetch(url + `comments`).then(value => value.json())
}
export {getCommentsFillter};