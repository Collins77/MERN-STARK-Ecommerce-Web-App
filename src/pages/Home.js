import React from 'react'
import {Link} from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main-banner'/>
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.<br /> for 24 mo. Footnote*</p>
                  <Link style={{ textDecoration: 'none', display: 'inline-block'}} className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='main-banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>From $1699.00 or <br/>$64.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main-banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy iPad Air</h5>
                  <p>From $999.00 or <br /> $41.62/mo. for 24 mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main-banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest band <br /> styles and colors.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main-banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>FREE ENGRAVING</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelity playback &<br /> ultra-low distortion.</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service.png' alt='services' />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>For all orders over $5</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-02.png' alt='services'/>
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save upto 25% off.</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-03.png' alt='services'/>
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-04.png' alt='services'/>
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-05.png' alt='services'/>
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Computers & Laptops</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/laptop.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/gamepad.png' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Mobiles & Tablets</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/pandt.png' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Accessories</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/acc.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Portable Speakers</h6>
                    <p>4 Items</p>
                  </div>
                  <img src='images/speaker.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Home Appliances</h6>
                    <p>12 Items</p>
                  </div>
                  <img src='images/homeapp.jpg' alt='camera' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='marque-wrapper py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-01.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-02.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-03.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-04.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-05.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-06.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'> 
                    <img src='images/brand-07.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-08.png' alt='brand'/>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container'>
          <div className='row'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home