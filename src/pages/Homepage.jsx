import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Swal from 'sweetalert2'
import Data from '../../public/data.json'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Slider from '../components/Slider'
import Card from '../components/Card';

const Homepage = () => {
  const [products,setProducts] = useState([])

  
  useEffect(()=>{
    setProducts(Data.products)
  },[])
  
  return (
    <>
      <Slider />

      {/* mini-Carousel */}
      <div className="mini-carousel my-4 px-5" id="mini-carousel">
        <Swiper
          spaceBetween={10}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className='item text-center'>
            <div className="image">
              <img src="/images/logo.jpg" alt="" width={'130px'} className='border border-2 p-3' />
            </div>
            <span className=''>Lorem, ipsum</span>

          </SwiperSlide>

          <SwiperSlide className='item text-center'>
            <div className="image">
              <img src="/images/form.avif" alt="" width={'130px'} className='border border-2 p-3' />
            </div>
            <span className=''>Lorem, ipsum</span>

          </SwiperSlide>

          <SwiperSlide className='item text-center'>
            <div className="image">
              <img src="/images/p1.jpg" alt="" width={'130px'} className='border border-2 p-3' />
            </div>
            <span className=''>Lorem, ipsum</span>

          </SwiperSlide>

          <SwiperSlide className='item text-center'>
            <div className="image">
              <img src="/images/logo.jpg" alt="" width={'130px'} className='border border-2 p-3' />
            </div>
            <span className=''>Lorem, ipsum</span>

          </SwiperSlide>

          <SwiperSlide className='item text-center'>
            <div className="image">
              <img src="/images/form.avif" alt="" width={'130px'} className='border border-2 p-3' />
            </div>
            <span className=''>Lorem, ipsum</span>

          </SwiperSlide>

          <SwiperSlide className='item text-center'>
            <div className="image">
              <img src="/images/p1.jpg" alt="" width={'130px'} className='border border-2 p-3' />
            </div>
            <span className=''>Lorem, ipsum</span>

          </SwiperSlide>

          <SwiperSlide className='item text-center'>
            <div className="image">
              <img src="/images/form.avif" alt="" width={'130px'} className='border border-2 p-3' />
            </div>
            <span className=''>Lorem, ipsum</span>

          </SwiperSlide>

        </Swiper>
      </div>
      {/* End of mini-Carousel */}


      {/* Trending Products */}
      <div className="px-5 my-5" id='products'>
        <h2 className=''>Trending Items</h2>
        <hr className='' />
        <div className="d-md-flex justify-content-evenly flex-wrap">
            {
              products.slice(0,4).map((items,i)=>(
                <Card data = {items} key={i} />
                
              ))
            }
        </div>
        <p className='text-end'>
          <a href="/products" className='btn btn-sm' style={{background:'#ff9100'}}>All Products <i className='bi bi-arrow-right'></i></a>
        </p>
      </div>
      {/* End of Trending Products */}
    </>
  )
}

export default Homepage
