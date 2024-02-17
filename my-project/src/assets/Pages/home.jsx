import React from "react";
import reactlogo from "../images/react.svg";
import Button from "./button";

function Home(props) {
  console.log("Data props:", props.category); // Log the props.Data array

  return (
    <>
      <Button value={props.Data}
       filterValue={props.filterValue}
        setData={props.setData} 
        category={props.category}
        realData={props.realData}/>
            
      <div className="flex align-middle w-screen h-auto justify-center bg-red-100 p-10">
        <div className="cards w-full p-10 h-full grid grid-cols-3 text-white font-bold rounded-lg shadow-xl">
          {props.Data.map((e) => {
           
            return (
              <div className="card m-10 w-56 h-92 rounded-3xl shadow-lg bg-white mx-auto" key={e.id}>
                <img src={reactlogo} alt="No img" className="w-52 h-36 border-2 border-dashed border-red-200" />
                <h2 className="text-center text-black m-5 font-extrabold">{e.brandName}</h2>
                <hr />
                <div className="flex m-2 justify-around text-black">
                  <h3>{e.price}</h3> <h3>{e.rating}</h3>
                </div>
                <hr />
                <button className="m-5 bg-blue-500 p-3 text-white rounded-lg">ADD TO CART</button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
