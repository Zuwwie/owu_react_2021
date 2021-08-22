import React from 'react';

function EditCar({car, editcar}) {
    console.log(car.id)
    let onFormSubmit = (e) => {
        e.preventDefault();
        let carToSave = {model: e.target.model.value || car.model, price: e.target.price.value || car.price, year: e.target.year.value || car.year, id: car.id}
        console.log(carToSave)
        editcar(carToSave)
    };
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type="text" name={'model'} placeholder={car.model}/>
                <input type="number" name={'price'} placeholder={car.price}/>
                <input type="number" name={'year'} placeholder={car.year}/>
                <button onClick={(e) => {
                    console.log(e)
                }}>SAVE
                </button>
            </form>

        </div>
    );
}

export default EditCar;