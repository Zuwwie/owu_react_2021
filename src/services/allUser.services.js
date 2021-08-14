const url = 'https://jsonplaceholder.typicode.com/users';

const getAllUsers = () => {
    return fetch(url).then(value => value.json())
}
export {getAllUsers}