import React from 'react'
import { Link } from 'react-router-dom'
import error from '../sass//images/error.jpg'

const NotFound = () => {
  return (
    <div className="notFound">
        <div className="container">
        <Link className='Not_found_link' to={'/'} >Back</Link>
         <img src={error} alt="" className="error"/>
        </div>

    </div>
  )
}

export default NotFound