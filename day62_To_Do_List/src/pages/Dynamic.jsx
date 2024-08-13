import React from 'react'
import { useParams,Link } from 'react-router-dom'

const Dynamic = () => {
    const {course}  = useParams()
  return (
    <>
    
    <h1>Course Name = {course}</h1>
    <Link to={'/'}>
    <button>Go to Home</button>
    </Link>
    </>
  )
}

export default Dynamic