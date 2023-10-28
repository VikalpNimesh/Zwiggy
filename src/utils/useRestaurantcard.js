import  { useEffect, useState } from "react";

const useRestaurantcard = () => {
  const [allRestaurant, setAllRestaurant] = useState();

  useEffect(() => {
    Apicall();
  }, []);

  const Apicall = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9456906&lng=78.16424780000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const cardItem =
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setAllRestaurant(cardItem);
    
    console.log(allRestaurant);
  };
  // console.log(allRestaurant);

  return allRestaurant;
};

export default useRestaurantcard;
