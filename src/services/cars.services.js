const url = `http://91.201.233.14`
const postCar = (car) => {
    return fetch(url + '//api/v1/cars', {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => json);
}

const getCar = () => {
    return fetch(url + `//api/v1/cars`).then(value => value.json())
}
const dellCar = (id) => {
    return fetch(url + `//api/v1/cars/` + id, {
        method: `DELETE`,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}
const putCar = (car) => {
    return fetch(url +'//api/v1/cars/' + car.id, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => json);
}

export {getCar, postCar,dellCar,putCar}