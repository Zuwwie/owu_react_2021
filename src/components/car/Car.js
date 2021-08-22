import {dellCar, putCar} from "../../services/cars.services";
import EditCar from "../editcar/EditCar";
import {useState} from "react";

function Car({car, dell}) {

    let [editCar, setEditCar] = useState(null);
    let [click, setClick] = useState(true);


    function dellThisCar() {
        dellCar(car.id).then((value) => {
            console.log(value)
            dell()
        })
    }

    function editCarLiftind(carToSave) {
        putCar(carToSave).then((value) => {
            console.log(value)
            dell()
        })
    }

    let button;
    if (click) {
        button = <button onClick={() => {
            setEditCar(true);
            setClick(false)
        }}>Edit car</button>
    } else {
        button = <button onClick={() => {
            setEditCar(null);
            setClick(true)
        }}>Hide</button>

    }

    return (
        <div>
            <h3>{car.id} -- {car.model} --- {car.price} ---- {car.year}
                <button onClick={() => dellThisCar()}>Dell</button>
                {button}
                {
                    editCar && <EditCar car={car} editcar={editCarLiftind}/>
                }
            </h3>
        </div>
    );
}

export default Car;