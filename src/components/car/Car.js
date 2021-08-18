import {dellCar} from "../../services/cars.services";

function Car({car, dell}) {


    function dellThisCar() {
        dellCar(car.id).then((value) => {
            console.log(value)
            dell()
        })
    }

    return (
        <div>
            <h3>{car.id} -- {car.model} --- {car.price} ---- {car.year}
                <button onClick={() => dellThisCar()}>Dell</button>
                <button onClick={()=>{}}>Edit car</button>
            </h3>
        </div>
    );
}

export default Car;