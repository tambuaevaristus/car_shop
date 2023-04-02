// // Import Firestore database
// import { collection, getDocs } from 'firebase/firestore'
// import db from '../auth/firebase'
// import React, { useState, useEffect } from 'react'

// // const Read = () => {

// //     const [info , setInfo] = useState([]);

// //     // Start the fetch operation as soon as
// //     // the page loads
// //     window.addEventListener('load', () => {
// //         Fetchdata();
// //       });

// //     // Fetch the required data using the get() method
// //     const Fetchdata = ()=>{
// //         db.collection("data").get().then((querySnapshot) => {

// //             // Loop through the data and store
// //             // it in array to display
// //             querySnapshot.forEach(element => {
// //                 var data = element.data();
// //                 setInfo(arr => [...arr , data]);

// //             });
// //         })
// //     }

// //     // Display the result on the page
// //     return (
// //         <div>
// //             <center>
// //             <h2>Student Details</h2>
// //             </center>

// //         {
// //             info.map((data) => (
// //             <Frame course={data.car_images}
// //                    name={data.amount}
// //                    age={data.mileage}/>
// //             ))
// //         }
// //         </div>

// //     );
// // }

// // // Define how each display entry will be structured
// // const Frame = ({course , name , age}) => {
// //     console.log(course + " " + name + " " + age);
// //     return (
// //         <center>
// //             <div className="div">

// // <p>NAME : {name}</p>

// // <p>Age : {age}</p>

// // <p>Course : {course}</p>

// //             </div>
// //         </center>
// //     );
// // }

// // export default Read;

// function ShopPage(db) {
//   const [cars, setCars] = useState([])

// //   console.log('Data is:', cars)
//   useEffect(() => {
//     const fetchCars = async () => {
//       //   const response=db.collection('Cars');

//       //   const data=await response.get();

//       const dataCollection = collection(db, "Cars")

//       const data = await getDocs(dataCollection)

//       console.log('docs from firebase: ', docs)

//       data.docs.forEach((item) => {
//         setCars([...cars, item.data()])
//       })
//     }
//     fetchCars()
//   }, [cars])

//   return (
//     <div className="App">
//       {cars &&
//         cars.map((car) => {
//           return (
//             <div>
//               <h4>{car.model}</h4>

//               <p>{car.fuel_type}</p>
//             </div>
//           )
//         })}
//     </div>
//   )
// }

// export default ShopPage
