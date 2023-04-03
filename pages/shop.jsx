import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Shop from "@/components/shop";
import { collection, getDocs } from 'firebase/firestore'
import React from "react";
import { useEffect, useState } from "react";
import { db } from "../firebase";

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

  return (
    <div>
      <Header />
      {cars.length != 0 ? <Shop cars = {cars}/> : <div>loading...</div>}
      <Footer />
    </div>
  );
}
