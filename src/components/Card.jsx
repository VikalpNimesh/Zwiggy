// import React from 'react'

const Card = ({name,img,rating,price,area}) => {
  return (
    <>
        <div className="flex h-[350px] w-72  items-center flex-col p-3 shadow-md mb-6 bg-white-100 text-lg font-bold font-serif rounded-lg text-center hover:bg-red-100">
            
            <img className='rounded-lg h-[200px]' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${img}`} alt=""/>

            <h1>{name}</h1>
            <h2>Rating : {rating}</h2>
            <h3> Rs {price/10}</h3>
            <h4>Area : {area}</h4>
        </div>
    </>
  )
}

export default Card;