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
    <div className='bg-light py-5'>

   {cars.lengthb!= 0 ? <div className='container'>
      <h1 className='text-secondary pt-4'><strong>Latest Cars</strong></h1>
      <div className='row'>
        {cars.slice(0,3).map((car)=><Car car={car} key={car.id} />)}
      </div>

    </div> : <div className="w-100 d-flex justify-content-center"><img src="img/loader_gif.gif"/></div>}
    </div>
  );
}
