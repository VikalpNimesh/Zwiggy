// // import React from 'react'
// import { useState ,useEffect} from "react"
// import Card from "./Card"
// import Data from "./Data"

// const Body = () => {
//   const  cardItem = Data[0].data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
// // useEffect(() => {
// //   FetchApi()
// // }, [])

// // const FetchApi = async() => {
// // const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=29.9456906&lng=78.16424780000001")
// // const json = await data.json()
// // //  const  cardItem =json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
// //  const  cardItem =json.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
// // //  console.log(json);
//  console.log(cardItem);
// //  setallRestaurantList(cardItem)
// // }
//     const [allRestaurantList, setallRestaurantList] = useState(cardItem)
//     setallRestaurantList(cardItem)
//     console.log(allRestaurantList);
//   return (
//     < >
//     <div className=" flex flex-wrap gap-4">
//     {Data[0].map((item,i)=>{return <Card key={i} item={item[0].info.name} /> })}
//     </div>
//     </>
//   )
// }

// export default Body