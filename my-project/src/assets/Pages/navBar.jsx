import { Link, NavLink } from "react-router-dom";
import cartimg from "../images/OIP.jpg"

const Navbar =(props)=>{
    return(
    <>
  
    <nav className="bg-[#212B37] w-screen h-10 flex justify-between items-center p-5 fixed"> 
    <div className="text-white w-2/3 ">Shopping Cart</div>
    <div className="flex w-1/3 justify-end items-center">
        <input type="text" name="search" className="mr-5 w-2/3" id="" placeholder="Search for products.."/>
        
       <Link to="/Cart"> <button className="text-white w-1/3 p-2 h-10">
          
            <svg className="w-6 h-6 relative text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7h-1M8 7h-.7M13 5v4m-2-2h4"/>
  </svg>
  <span className="text-white absolute top-1/2 right-18 bg-red-700 w-3 text-[8px] h-3 flex align-middle justify-center rounded-full">{props.Data.length}</span>
  </button></Link>
    </div>
    
    </nav>
    </>)
};
export default Navbar