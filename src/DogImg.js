import React from 'react'
import "./DogImg.css"

function DogImg({img,theme}) {
  return (
    <div className={`imgDiv${theme}`} >
        <img className='img'
        src={img} alt="" />
    </div>
  )
}

export default DogImg