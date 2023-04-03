import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function success() {
  return (
    <div>
        <Header />
            
            <h1 className='text-danger py-5 text-center' >
                Bid successfully created <br/>
                we will get back to your <br/>
                <button className="btn btn-danger ">Create</button>

            </h1>

        <Footer />

    </div>
  )
}
