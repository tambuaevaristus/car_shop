import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Shop from "@/components/shop";
import { collection, getDocs } from 'firebase/firestore'
import React from "react";
import { useState } from "react";
import { db } from "../auth/firebase"
import { getStorage, ref } from "firebase/storage";
import {uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, doc} from 'firebase/firestore'

export default function AddCars() {
    const carsCollectionRef = collection(db, 'Cars')
    const [cars, setCars] = useState([])
    const [mileage, setMileage] = useState("")
    const [fuel_type, setFueltype] = useState("")
    const [model, setModel] = useState("")
    const [engine_type, setEngineType] = useState("")
    const [end_date, setEndDate] = useState("")
    const [imageUpload, setImageUpload] = useState(null)

    const storage = getStorage();

    const addCars = async () => {
        const data = await setDoc(doc(citiesRef, "SF"), {
            mileage: mileage,
            fuel_type: fuel_type,
            bidding: [
                {
                    user_id: "1",
                    amount: "20000000"
                }
            ],
            model: model,
            engine_type: engine_type,
            end_date:end_date
        });
    }

    const AddCar = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/Cars/${imageUpload.name}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                addDoc(carsCollectionRef, {
                    mileage: mileage,
                    fuel_type: fuel_type,
                    bidding: [
                        {
                            user_id: "1",
                            amount: "20000000"
                        }
                    ],
                    images:[url],
                    model: model,
                    engine_type: engine_type,
                    end_date:end_date
                })
            }).then(() => {
                console.log("Upload Successful")
            })
        })
    }


    console.log("cars", cars)

    return (
        <div>
            <Header />
            <div className="w-100 mt-20  d-flex justify-content-center">
                <div className="w-50 my-5">
                    <label className="w-100" for="exampleFormControlFile1">Upload pictures of your vehicle</label>
                    <input type="file" onChange={(e)=>{
                        setImageUpload(e.target.files[0])
                    }} className="form-control-file" id="exampleFormControlFile1" />
                    <input className="form-control mt-2" onChange={(e)=>{
                        setModel(e.target.value)
                    }} type="text" placeholder="Model" />
                    <input className="form-control mt-2" onChange={(e)=>{
                        setMileage(e.target.value)
                    }} type="text" placeholder="Mileage" />
                    <input className="form-control mt-2" onChange={(e)=>{
                        setFueltype(e.target.value)
                    }} type="text" placeholder="Fuel type" />
                    <input className="form-control mt-2" onChange={(e)=>{
                        setEngineType(e.target.value)
                    }} type="text" placeholder="Engine type" />
                    <input className="form-control mt-2" onChange={(e)=>{
                        setEndDate(e.target.value)
                    }} type="date" placeholder="Bidding Open Untill..." />
                    <button disabled={mileage == "" || fuel_type == "" || model == "" || imageUpload == null || engine_type == "" || end_date == ""} className="btn w-100 mt-2 border bg-danger text-light" onClick={()=>{
                        AddCar()
                    }}>Submit</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
