import React from 'react'

const Footer = () => {
  return (
    <>
      {/* <!-- Start of footer --> */}
  <footer className="footer p-4 mt-5" id="footer">
    <div className="d-md-flex justify-content-between">

      <div className="col-md-4">
        <a href="/" className='text-decoration-none d-flex align-items-center'>
        <img src="/images/logo.jpg" alt="logo" width={'60'} className='rounded-circle shadow' /> <span className='color fs-1 fw-bold ms-2'> A1 Marketing</span>
        </a>
        <p className="my-2" style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          aspernatur sequi similique beatae inventore soluta Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Facilis, sit!</p>
        <p>
          <a href="#" className='color'><i className="bi bi-facebook mx-2 fs-4"></i></a>
          <a href="#" className='color'><i className="bi bi-instagram mx-2 fs-4 "></i></a>
          <a href="#" className='color'><i className="bi bi-linkedin mx-2 fs-4 "></i></a>
        </p>
      </div>

      <div className="col-md-3">
        <h3 className="">Contact Us</h3>
        <hr className="w-50"/>
        <p className='d-flex align-items-center'><strong className="color me-2"><i className="bi bi-geo-alt-fill fs-4"></i></strong> Lorem ipsum dolor sit amet dolor sit amet.</p>
        <p className='d-flex align-items-center'><strong className="color me-2"><i className="bi bi-envelope-arrow-up-fill fs-4"></i> </strong> someone@gmail.com</p>
        <p className='d-flex align-items-center'><strong className="color me-2"><i className="bi bi-telephone-forward-fill fs-4"></i> </strong> (+977) - 980000000</p>
        <p className='d-flex align-items-center'><strong className="color me-2"><i className="bi bi-chat-left-dots-fill fs-4"></i> </strong> info@company.com</p>
      </div>

      <div className="col-md-2 help">
        <h3 className="">Help & Support</h3>
        <hr className="w-75"/>
        <p><a href="#" className="text-secondary">Privacy Policy</a></p>
        <p><a href="#" className="text-secondary">Terms & Conditions</a></p>
        <p><a href="#" className="text-secondary">FAQs</a></p>
        <p><a href="#" className="text-secondary">About Us</a></p>
        <p><a href="#" className="text-secondary">Contact Us</a></p>

      </div>
    </div>

  </footer>
  {/* <!-- End of Footer --> */}
    </>
  )
}

export default Footer
