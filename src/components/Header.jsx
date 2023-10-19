// import {useState} from 'react'

const Header = () => {

  return (
    <>
   <div className=" flex justify-between items-center p-5 border-solid border-red-500 outline-4 ">
   <img className="w-[100px]" src="https://e7.pngegg.com/pngimages/198/765/png-clipart-minion-illustration-bob-the-minion-kevin-the-minion-stuart-the-minion-minions-youtube-minions-heroes-material-thumbnail.png" alt="Logo"  />

   
        <ul className=" flex justify-between gap-11">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
   </div>
    </>
  )
}

export default Header