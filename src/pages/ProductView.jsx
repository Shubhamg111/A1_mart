import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../../public/DATA.json'

const ProductView = () => {
     const [product, setProduct] = useState([])
        const params  = useParams()
        let pid  = params.product_id
    
        useEffect(() => {
          axios.get(`/DATA.json`)
            .then(res => setProduct(res.data.products))
            .catch(err => console.log('Axios is not working.'))
        }, [])
        console.log(Data.products)
        // console.log(product)
        // console.log(pid)
        const items = Data.products.find((item)=>{
            return item.id == pid
        } )
        // console.log(typeof(items.name))
  return (
    <>
      <h1>{items.name}</h1>
    </>
  )
}

export default ProductView
