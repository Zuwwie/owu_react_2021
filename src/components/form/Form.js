import {postCar} from "../../services/cars.services";

export default function Form({cars, setCars}) {

    let onFormSubmit = (e) => {
        e.preventDefault();
        let carToSave = {model: e.target.model.value, price: e.target.price.value, year: e.target.year.value}
        postCar(carToSave).then(value => setCars([...cars, value]));
    };

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type="text" name={'model'} placeholder='model'/>
                <input type="number" name={'price'} placeholder={'price'}/>
                <input type="number" name={'year'} placeholder={'year'}/>
                <button onClick={(e) => {
                    console.log(e)
                }}>save car
                </button>
            </form>

        </div>
    );
}