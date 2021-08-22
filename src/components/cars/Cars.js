import React, {useEffect, useState} from 'react';
import {dellCar, getCar} from "../../services/cars.services";
import Car from "../car/Car";
import Form from "../form/Form";

function Cars() {
    let [cars,setCars] = useState([]);





     useEffect(() => {
         getCar().then(value => setCars(value))
         console.log(`Cars get`)
     },[])

    // useEffect((id)=>{
    //      dellCar(id)
    // })
    const dell = () => {
     getCar().then(value => setCars([...value]))
    }
    const onDell = (e) => {
        console.log(e.target[0].value)
        e.preventDefault()
        dellCar(e.target[0].value)
    }


    return (
       <div>
           <form onSubmit={onDell}>
               <input type="text" placeholder='Enter ID' />
               <button type='submit' >Dell</button>
           </form>

           <div style={{display: "flex", flexDirection: "column-reverse"}}>


               {cars.map(car=> <Car key={car.id} car={car} setCars={setCars} cars={cars} dell={dell} />)}
               <Form setCars={setCars} cars={cars} />
           </div>

       </div>


    );
}

export default Cars;