import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Shop from "@/components/Shop";
import { db } from "@/firebase";
import { collection, getDocs } from 'firebase/firestore'
import React from "react";
import { useEffect, useState } from "react";

export default function AddCars() {
    const carsCollectionRef = collection(db, 'Cars')
    const [cars, setCars] = useState([])
    const [mileage, setMileage] = useState("")
    const [fuel_type, setFueltype] = useState("")
    const [model, setModel] = useState("")
    const [engine_type, setEngineType] = useState("")

    const addCars = async () => {
        const data = await setDoc(doc(citiesRef, "SF"), {
            mileage: "San Francisco", state: "CA", country: "USA",
            fuel_type: false, population: 860000,
            bidding: false, population: 860000,
            model: false, population: 860000,
            engine_type: ["west_coast", "norcal"]
        });
    }



    console.log("cars", cars)

    return (
        <div>
            <Header />
            <div>
                <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" />
                <input class="form-control" type="text" placeholder="Default input" />
                <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" />
            </div>
            <Footer />
        </div>
    );
}
