import React from 'react'
import Service from './Service'

function Home() {
  return (
    <>
      <img src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?_gl=1*x3172r*_ga*MjEzNzQxMTYyMy4xNzU4MDQwNjg5*_ga_8JE65Q40S6*czE3NTgwNDA2ODkkbzEkZzEkdDE3NTgwNDA3MTUkajM0JGwwJGgw" alt="Homeimage" className='w-100' style={{ height: "800px" }} />
      <i class="fa-solid fa-car"></i>
      <div className="d-flex justify-content-center my-4">
  <button type="button" className="btn btn-primary btn-lg shadow-sm" style={{ height: "50px" }}>
    Contact us
  </button>
</div>
      <Service />
    </>
  )
}

export default Home
