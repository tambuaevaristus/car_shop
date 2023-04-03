import React, { useEffect, useState } from "react";
import Car from "./Car";
import { db } from "@/firebase";
import { collection, getDocs } from "@firebase/firestore";

export default function CarList() {
  const carsCollectionRef = collection(db, "Cars");
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      const data = await getDocs(carsCollectionRef);
      // setCars(data)
      setCars(data.docs.map((post) => ({ ...post.data(), id: post.id })));
    };
    getCars();

    // trunk-ignore(eslint/react-hooks/exhaustive-deps)
  }, []);
  return (
    <div>
      car list
      <div className="container">
        <div className="row">
          {cars.map((car) => (
            <Car 
                key={car.id}
                bidding={car.bidding}
                engine={car.engine_type}
                fuelType = {car.fuel_type}
                image = {car.images}
                mileage={car.mileage}
                model={car.model}
                highest={car.highest_bid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
