import React from 'react'
import { Link } from 'react-router-dom'

const First = () => {
  return (
    <>

    <h5 style={{color:'red',background:'yellow',fontSize:'40px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, dignissimos!</h5>

    <Link to={'/'}>Go to home page </Link>
      
    </>
  )
}

export default First
