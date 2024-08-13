import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const course = [
    {id:1,title:'React Full Stack'},
    {id:2,title:'Java Full Stack'},
    {id:3,title:'Python Full Stack'},
  ]
  return (
    <div>
      <h1>Courses</h1>
      {course.map((data)=><div key={data.id}>
        <ul>
          <Link to={`/product/${data.title}`}>{data.title}</Link>
        </ul>
      </div>)}
    </div>
  )
}

export default Home