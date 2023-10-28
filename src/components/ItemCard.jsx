import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ItemCard = () => {
  const [newData, setNewData] = useState({});
  const { img } = useParams();
// console.log(newData);
  useEffect(() => {
    Apicall();
  }, []);

  const Apicall = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9456906&lng=78.16424780000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const cardItems =
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    if (cardItems.length > 0) {
      setNewData(cardItems[5]);
    }
  };

  return (
    <div className="container mx-4 my-4 flex items-center justify-center w-full ">
     
      {newData && (
        <div className="border rounded-lg">
        <img className=' h-[300px] w-full rounded-lg' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${img}`} alt=""/>
        
          <div className="p-4">

         {/*  */}
           
            <h1 className="flex items-center flex-col    bg-white-100 text-lg font-bold font-serif rounded-lg text-center" >{newData?.info?.name}</h1>

            <h6 className="flex items-center flex-col p-3  bg-white-100 text-lg font-bold font-serif rounded-lg text-center">
              {newData?.info?.cuisines.join('    ')}
            </h6>
            <Link
              href="#"
              className=  "flex items-center flex-col p-3  mt-2 bg-white-100 text-lg font-bold font-serif rounded-lg text-center bg-green-500   hover:bg-green-400 text-white px-4 py-2 ">
              Add To Cart
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
