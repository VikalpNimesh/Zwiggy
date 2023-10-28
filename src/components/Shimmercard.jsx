// import React from 'react'

const Shimmercard = () => {

    const array=Array.from({length:20})
    
    return (<>

        <div className=" flex flex-wrap gap-2 ">

   {array.map((item,i)=>( <div key={i} className="flex w-72  h-[350px] border-solid border-black items-center flex-col p-3 bg-gray-100 shadow-md mb-6 ">
    </div>))}
        
        </div>

   
    </>
  )
}

export default Shimmercard