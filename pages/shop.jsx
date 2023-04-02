import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Shop from "@/components/Shop";
import { collection, getDocs } from 'firebase/firestore'
import React from "react";
import { useEffect, useState } from "react";
import { db } from "../auth/firebase"

export default function ShopPage() {
  const carsCollectionRef = collection(db, 'Cars')
  const [cars, setCars] = useState("")

  useEffect(() => {

    const getCars= async () => {
      const data = await getDocs(carsCollectionRef);
      // setCars(data)
      setCars(data.docs.map((post) => ({ ...post.data(), id: post.id })))
    }
    getCars()

  },[])

  console.log("cars", cars)

  return (
    <div>
      <Header />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Shop />
      <Footer />
    </div>
  );
}
