const url =  `https://jsonplaceholder.typicode.com/comments`;

const getCommentsFillter = () => {
    return fetch(url).then(value => value.json())
}
export {getCommentsFillter};