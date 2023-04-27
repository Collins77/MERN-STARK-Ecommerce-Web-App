import React from 'react'
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
  <>
    <footer className='py-4'>
     <div className='container'>
      <div className='row align-items-center'>
        <div className='col-5'>
          <div className='footer-top-data d-flex gap-30 align-items-center'>
            <img src="images/newsletter.png" alt="Newsletter"/>
            <h3 className='mb-0 text-white'>Sign Up for Newsletter</h3>
          </div>
        </div>
        <div className='col-7'>
              <div className="input-group">
                  <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2"/>
                  <span className="input-group-text p-3" id="basic-addon2">
                    Subscribe
                  </span>
              </div>
        </div>
      </div>
     </div>
    </footer>
    <footer className='py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div>
              <address className='text-white fs-6'>Building: Hazina Trade Center, <br/>
                Nairobi, Kenya, <br/>
                Code: 517
              </address>
              <a style={{textDecoration: 'none'}} href='tel: +254 791448827' className='mt-3 d-block mb-1 text-white'>+254 791448827</a>
              <a style={{textDecoration: 'none'}} href='mailto: collinsmuemah@gmail.com' className='mt-2 d-block mb-0 text-white'>collinsmuemah@gmail.com</a>
              <div className='social-icons d-flex align-items-center gap-30'>
                <a href='/' alt='social icons'>
                  <BsLinkedin className='text-white fs-4'/>
                </a>
                <a href='/' alt='social icons' className='text-white'>
                  <BsInstagram className='text-white fs-4'/>
                </a>
                <a href='/' alt='social icons' className='text-white'>
                  <BsGithub className='text-white fs-4'/>
                </a>
                <a href='/' alt='social icons' className='text-white'>
                  <BsYoutube className='text-white fs-4'/>
                </a>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link style={{ textDecoration: 'none', display: 'inline-block'}} className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link style={{ textDecoration: 'none', display: 'inline-block'}} className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link style={{ textDecoration: 'none', display: 'inline-block'}} className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link style={{ textDecoration: 'none', display: 'inline-block'}} className='text-white py-2 mb-1'>Terms & Conditions</Link>
              <Link style={{ textDecoration: 'none', display: 'inline-block'}} className='text-white py-2 mb-1'>Blogs</Link>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link style={{ textDecoration: 'none', display: 'inline-block'}} className='text-white py-2 mb-1'>About Us</Link>
              <Link style={{ textDecoration: 'none', display: 'inline-block'}} className='text-white py-2 mb-1'>FAQ</Link>
              <Link style={{ textDecoration: 'none', display: 'inline-block'}} className='text-white py-2 mb-1'>Content</Link>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link style={{ textDecoration: 'none', display: 'inline-block'}} className='text-white py-2 mb-1'>Laptops</Link>
              <Link style={{ textDecoration: 'none', display: 'inline-block'}} className='text-white py-2 mb-1'>Headphones</Link>
              <Link style={{ textDecoration: 'none', display: 'inline-block'}} className='text-white py-2 mb-1'>Tablets</Link>
              <Link style={{ textDecoration: 'none', display: 'inline-block'}} className='text-white py-2 mb-1'>Watches</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy; { new Date().getFullYear()} Powered by Cotek Technologies.</p>
          </div>
        </div>
      </div>
    </footer>
  </>
  )
}

export default Footer