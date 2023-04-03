import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Shop from "@/components/Shop";
import { db } from "@/firebase";
import { collection, getDocs } from 'firebase/firestore'
import React from "react";
import { useEffect, useState } from "react";

export default function ShopPage() {
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

  console.log("cars", cars)

  return (
    <div>
      <Header />
      <Shop cars = {cars}/>
      <Footer />
    </div>
  );
}
