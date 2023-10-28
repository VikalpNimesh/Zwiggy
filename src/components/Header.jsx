import { Link } from "react-router-dom"

// import {useState} from 'react'



const Header = () => {

  return (
    <>
   <div className=" flex justify-between items-center p-5 border-solid border-red-500 outline-4 font-extrabold text-lg hover:cursor-pointer  font-serif ">
   <img className="w-[100px]" src="https://e7.pngegg.com/pngimages/198/765/png-clipart-minion-illustration-bob-the-minion-kevin-the-minion-stuart-the-minion-minions-youtube-minions-heroes-material-thumbnail.png" alt="Logo"  />

   
        <ul className=" flex justify-between gap-11">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/instamart">Instamart</Link>
            {/* <Link to="/restaurants/:id">Deatail</Link> */}

        </ul>
   </div>
    </>
  )
}

export default Header