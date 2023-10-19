import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmercard from "./Shimmercard";

const Newbody = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    Apicall();
  }, []);

  useEffect(() => {
    if (searchInput.trim() === "") {
      setFilteredRestaurants(allRestaurant);
    } else {
      const filterdata = allRestaurant.filter((item) =>
        item.info.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredRestaurants(filterdata);
    }
  }, [searchInput, allRestaurant]);

  const Apicall = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/mapi/homepage/getCards?lat=29.9456906&lng=78.16424780000001"
    // );
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9456906&lng=78.16424780000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // const cardItem =
    //   json.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
    //     ?.restaurants || [];
    const cardItem =
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setAllRestaurant(cardItem);
    setFilteredRestaurants(cardItem);
  };

  return (
    <>
    <div className="flex flex-wrap p-5 gap-2">
    <input
  className="font-bold font-serif w-[80%] m-auto h-[4.25rem] p-[12px] border-solid border-2 border-black rounded-xl mb-4 outline-none" 
  type="search"
  placeholder="Search Here..."
  value={searchInput}
  onChange={(e) => setSearchInput(e.target.value)}
/>

<button
  onClick={() => setSearchInput('')}
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded h-16"
>
  Clear
</button>


    {!allRestaurant.length ? <Shimmercard /> :   filteredRestaurants.map((item, i) => (
      <Card
        key={i}
        // name={item.info.name}
        name={item.info.name}
        img={item.info.cloudinaryImageId}
        rating={item.info.avgRating}
        price={item.info.feeDetails.totalFee}
        area={item.info.areaName}
      />
    ))
    }
  </div> 
   
  </>
  );
};

export default Newbody;
