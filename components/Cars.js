import React from 'react'

export default function Cars() {
    const cars = [
        {
            id:"1",
            owner_name:"Akoneh Silas Magho",
            location:"Buea",
            engine_type:"",
            model:"Corolla",
            brand:"Toyota",
            fuel_type:"",
            mileage:"",
            car_images:["img/carousel-1.png","img/carousel-2.png","img/carousel-bg-3.jpg"],
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
            model:"Camry",
            brand:"Toyota",
            fuel_type:"",
            mileage:"",
            car_images:["img/carousel-1.png","img/carousel-2.png","img/carousel-bg-3.jpg"],
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
            model:"Altima",
            brand:"Nissan",
            fuel_type:"",
            mileage:"",
            car_images:["img/carousel-1.png","img/carousel-2.png","img/carousel-bg-3.jpg"],
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
        }, {
            id:"3",
            owner_name:"Ngoran Tawir Blaise",
            location:"Bamenda",
            engine_type:"",
            model:"Altima",
            brand:"Nissan",
            fuel_type:"",
            mileage:"",
            car_images:["img/carousel-1.png","img/carousel-2.png","img/carousel-bg-3.jpg"],
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
        }, {
            id:"3",
            owner_name:"Ngoran Tawir Blaise",
            location:"Bamenda",
            engine_type:"",
            model:"Altima",
            brand:"Nissan",
            fuel_type:"",
            mileage:"",
            car_images:["img/carousel-1.png","img/carousel-2.png","img/carousel-bg-3.jpg"],
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
        }, {
            id:"3",
            owner_name:"Ngoran Tawir Blaise",
            location:"Bamenda",
            engine_type:"",
            model:"Altima",
            brand:"Nissan",
            fuel_type:"",
            mileage:"",
            car_images:["img/carousel-1.png","img/carousel-2.png","img/carousel-bg-3.jpg"],
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
        }, {
            id:"3",
            owner_name:"Ngoran Tawir Blaise",
            location:"Bamenda",
            engine_type:"",
            model:"Altima",
            brand:"Nissan",
            fuel_type:"",
            mileage:"",
            car_images:["img/carousel-1.png","img/carousel-2.png","img/carousel-bg-3.jpg"],
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
        }, {
            id:"3",
            owner_name:"Ngoran Tawir Blaise",
            location:"Bamenda",
            engine_type:"",
            model:"Altima",
            brand:"Nissan",
            fuel_type:"",
            mileage:"",
            car_images:["img/carousel-1.png","img/carousel-2.png","img/carousel-bg-3.jpg"],
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
    <div className='d-flex flex-row flex-wrap mx-5 justify-content-center'>
    {cars.map((car)=>
        <div className='card m-2' style={{width:"18rem"}}>
            <img className='card-img-top ' src={car.car_images[0]} alt="..." />
            <div className='card-body text-bg-secondary'>
                <h5 className='card-title'>{car.brand} {" "} {car.model}</h5>
                <p className='card-text'>Highest bid: {car.biddings.map((bid)=>bid.ammount).sort((a,b)=>b-a)[0]}</p>
                <a href='#' className='btn btn-primary'>Details</a>
            </div>

        </div>
    )}
    </div>
  )
}
