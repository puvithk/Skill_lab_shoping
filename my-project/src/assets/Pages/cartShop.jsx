
import React from "react";
import reactlogo from "../images/react.svg";
import { Link } from "react-router-dom";

const CartShop = (props) => {
  return (
    <>
      <div className="flex align-middle w-screen h-screen justify-center bg-red-100 p-10">

        <div className="cards w-full p-10 h-full grid grid-cols-3 text-white font-bold rounded-lg shadow-xl">
        {props.Data.length === 0 && (
  <div className="flex flex-row w-screen justify-center items-center h-full p-16">
    <h2 className="self-center text-black justify-self-center w-3/4 ">No Products in the cart</h2>
   <Link to="/" className="w-1/4 bg-black mr-40 rounded-full p-1 text-center" >Continue Shopping</Link> 
  </div>
)}

          {props.Data.map((e) => {
            return (
              <div className="card m-10 w-56 h-92 rounded-3xl shadow-lg bg-white mx-auto" key={e.id}>
                <img src={e.img} alt="No img" className="w-52 h-36 border-2 border-dashed border-red-200" />
                <h2 className="text-center text-black m-5 font-extrabold">{e.brandName}</h2>
                <hr />
                <div className="flex m-2 justify-around text-black">
                  <h3>{e.price}</h3> <h3>{e.rating}</h3>
                </div>
                <hr />
                <button className="m-5 bg-blue-500 p-3 text-white rounded-lg">Remove from CART</button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CartShop;
