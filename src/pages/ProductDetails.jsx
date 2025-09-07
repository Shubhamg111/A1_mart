import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Swal from 'sweetalert2'
import Rating from '../components/Rating';


const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const [qty, setQty] = useState(1)
    const params  = useParams()
    let pid  = params.product_id

    useEffect(() => {
      axios.get(`https://dummyjson.com/products/${pid}`)
        .then(res => setProduct(res.data))
        .catch(err => console.log('Axios is not working.'))
    }, [])
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    const decrease=()=>{
      if (qty > 1){
        setQty(qty-1)
      }
      else{
        Swal.fire({
          title: "Info!",
          icon: "info",
          text : "Minimum quantity must be 1.",
          draggable: true
        });
      }
    }


    const addtocart=()=>{
      // get localstorage data if exist otherwisw empty array
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []


      // set object for product information
      const productData = {
        id : product.id,
        title : product.title,
        category: product.category,
        quantity : qty,
        price : product.price,
        image: product.thumbnail,
        discount: product.discountPercentage
      }

      // check if the item is already exist or not
      const existingItem = cartItems.find((item)=>item.id === product.id)
      if (!existingItem){
        cartItems.push(productData)
        localStorage.setItem('cartItems',JSON.stringify(cartItems))
        Swal.fire({
          title: "Success!",
          icon: "success",
          text : "Item Added to the Cart.",
          draggable: true,
          timer:3000
        });
      }
      else{
        Swal.fire({
          title: "Error!",
          icon: "error",
          text : "Item Already Exist.",
          draggable: true
        });
      }
    }

  return (
    <>
        <div className="container my-5">
          <p className="breadcrumb">
            <a href="/" className='text-dark me-1'>Home</a> / 
            <a href="/products" className='text-dark mx-1'> Products </a> / 
            <small className='text-secondary mx-1'>{product.category}</small>
          </p>
          <div className="d-md-flex justify-content-evenly shadow py-3 rounded-4 p-2">
            <div className="col-md-4">
                <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
          product.images && product.images.length > 1?
        <SwiperSlide>
          <img src={product.images[0]} />
        </SwiperSlide>:
        <SwiperSlide>
          <img src={product.images} />
        </SwiperSlide>
        } 
        {
          product.images && product.images.length > 1?
        <SwiperSlide>
          <img src={product.images[1]} />
        </SwiperSlide>: ''
        }
        
       
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          product.images && product.images.length > 1?
        <SwiperSlide>
          <img src={product.images[0]} className='border' />
        </SwiperSlide>:
        <SwiperSlide>
          <img src={product.images} className='border' />
        </SwiperSlide>
        } 
        {
          product.images && product.images.length > 1? <SwiperSlide><img src={product.images[1]} className='border' /></SwiperSlide>: ''
        }
        
        
      </Swiper>
            </div>
            <div className="col-md-6">
              <h2 className='text-dark'>{product.title}</h2>
              <p><span className='fw-bold text-secondary'>Condition </span> : New Product</p>
              {
                product.rating && <Rating rate= {product.rating} />
              }
              <p className='text-secondary'>{product.description}</p>
              <hr />
              <p className='text-secondary'><span className='fw-bold'>Size : </span>S | M | L</p>
              <p className='text-secondary fs-5'><span className='fw-bold'>Price : $ </span>
              <del>{product.price}</del>
              <span className='text-success ms-2'>{product.price}</span>
              </p>

              <p className='fw-bold mb-1'>Quantity :</p>
              <p className='d-flex'>
                <button className='btn bg-secondary-subtle rounded-end-0 rounded-start-2' onClick={decrease}> - </button>
                <input type="text" value={qty} readOnly className='form-control w-25 text-center rounded-0' />
                <button className='btn bg-secondary-subtle rounded-end-2 rounded-start-0' onClick={()=>setQty(qty+1)}> + </button>
              </p>
              <div className="d-flex">
                <a href="#" className='btn btn-outline-success me-3'>Add to Wishlist</a>
                <a href="#" className='btn btn-warning' onClick={addtocart}>Add to Cart</a>
              </div>

              </div>
          </div>
        </div>
    </>
  )
}

export default ProductDetails
