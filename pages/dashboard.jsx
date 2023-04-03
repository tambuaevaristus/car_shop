import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Shop from "@/components/shop";
import { collection, getDocs } from 'firebase/firestore'
import React from "react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Link from "next/link";

export default function Dash() {
    const carsCollectionRef = collection(db, 'Cars')
    const [cars, setCars] = useState([])

    useEffect(() => {

        const getCars = async () => {
            const data = await getDocs(carsCollectionRef);
            // setCars(data)
            setCars(data.docs.map((post) => ({ ...post.data(), id: post.id })))
        }
        getCars()

        // trunk-ignore(eslint/react-hooks/exhaustive-deps)
    }, [])

    return (
        <div>
            <Header />
            <div className="w-100 p-5 justify-content-center">
                <Link href={""} > <button className="p-2 px-3">View Cars
                </button></Link>
            <Link href={"/addCars"} > <button className="p-2 px-3">Add Cars
                </button></Link>
            </div>
            <Footer />
        </div>
    );
}
