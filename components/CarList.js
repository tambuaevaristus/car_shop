import Car from './Car'
import { collection, getDocs } from 'firebase/firestore'
import React from "react";
import { useEffect, useState } from "react";
import { db } from "../firebase"

export default function CarList() {
  const carsCollectionRef = collection(db, 'Cars')
  const [cars, setCars] = useState([])

  useEffect(() => {

    const getCars= async () => {
      const data = await getDocs(carsCollectionRef);
      // setCars(data)
      setCars(data.docs.map((post) => ({ ...post.data(), id: post.id })))
    }
    getCars()

  // trunk-ignore(eslint/react-hooks/exhaustive-deps)
  },[])

  console.log("home", cars)

  return (
    <div>

      <div className='container'>
        <div className='row'>
          {cars.map((car)=><Car car={car} key={car.id} />)}
        </div>

      </div>
    </div>
  );
}
