import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Data from '../../public/data.json'
const Products = () => {
  const [products, setProducts] = useState([])

  // useEffect(() => {
  //   axios.get('https://dummyjson.com/products')
  //     .then(res => setProducts(res.data.products))
  //     .catch(err => console.log('Axios is not working.'))
  // }, [])
 useEffect(()=>{
    setProducts(Data.products)
  },[])

  return (
    <>
      <div className="container-fluid my-5" id='productpage'>

        <div className="d-md-flex justify-content-evenly flex-wrap">
          {
            products.map((items, i) => (
              <Card data={items} key={i} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Products
