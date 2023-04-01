import React from 'react'

export default function Cars() {
    const cars = [
        {
            id:"1",
            owner_name:"Akoneh Silas Magho",
            location:"Buea",
            engine_type:"",
            model:"",
            fuel_type:"",
            mileage:"",
            car_images:["carousel-1.png","carousel-2.png","carousel-bg-3.jpg"],
            owner_phone_number:"+237681099238",
            biddings:[
                {
                    user_id:"1",
                    ammount:3000000
                }, {
                    user_id:"2",
                    ammount:3500000
                }
            ]
        }, {
            id:"2",
            owner_name:"Jaff Boris Meh",
            location:"Limbe",
            engine_type:"",
            model:"",
            fuel_type:"",
            mileage:"",
            car_images:["carousel-1.png","carousel-2.png","carousel-bg-3.jpg"],
            owner_phone_number:"+237681099238",
            biddings:[
                {
                    user_id:"1",
                    ammount:40000000
                }, {
                    user_id:"2",
                    ammount:3500000
                }
            ]
        }, {
            id:"3",
            owner_name:"Ngoran Tawir Blaise",
            location:"Bamenda",
            engine_type:"",
            model:"",
            fuel_type:"",
            mileage:"",
            car_images:["carousel-1.png","carousel-2.png","carousel-bg-3.jpg"],
            owner_phone_number:"+237681099238",
            biddings:[
                {
                    user_id:"1",
                    ammount:1500000
                }, {
                    user_id:"2",
                    ammount:2000000
                }
            ]
        }
    ]
  return (
    <div>
    {cars.map((car)=>{
        <div key={car.id} className="flex flex-row">
            <img src={car.car_images[0]}/>
            <div className='flex'>

            </div>
        </div>
    })}
    </div>
  )
}
