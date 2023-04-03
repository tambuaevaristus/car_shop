import React from 'react'

export default function Services() {
  return (
    <div>
          <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-certificate fa-2x text-secondary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3 mt-1">Safety</h5>
                            <p>Our vehicles have maximum confort. Your safety is our priority</p>
                            <a className="text-secondary border-bottom" href="">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="d-flex bg-light py-5 px-4">
                        <i className="fa fa-users-cog fa-2x text-secondary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3 mt-1">Speed</h5>
                            <p>Our Vehicles are faster </p>
                            <a className="text-secondary border-bottom" href="">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-tools fa-2x text-secondary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3 mt-1">Excitement</h5>
                            <p>You enjoy while you ride</p>
                            <a className="text-secondary border-bottom" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
