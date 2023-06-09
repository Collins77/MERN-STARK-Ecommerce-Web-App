import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const OurStore = () => {
  return (
    <>
      <Meta title="Our Store"/>
      <BreadCrumb title="Our Store" />
      <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  Shop By Categories
                </h3>
                <div>
                  <ul className='ps-0'>
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  Filter By
                </h3>
                <div>
                  <h5 className='sub-title'>Availability</h5>
                  <div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value="" id="" />
                      <label className='form-check-label' htmlFor="">In Stock (1)</label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value="" id="" />
                      <label className='form-check-label' htmlFor="">Out of Stock (0)</label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-items-center'>
                    <div className='form-floating mb-3'>
                      <input type='email' className='form-control' id='floatingInput' />
                      <label htmlFor='floatingInput'>From</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <input type='email' className='form-control' id='floatingInput1' />
                      <label htmlFor='floatingInput'>To</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  Product Tags
                </h3>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  Random Products
                </h3>
              </div>
            </div>
            <div className='col-9'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore