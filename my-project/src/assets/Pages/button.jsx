
import React, { useState } from "react";
import Data from "./data";
const Button = (props) => {
    const [data, setData] = useState(Data)
  console.log(props.value)
  return (
    <>
      <div className="cont mt-16 fixed w-screen  flex justify-center items-center">
        <div className="buttons flex gap-2">
          {props.category.map((e) => {
            return (
              <button className="bg-black text-white p-1 pl-2 pr-2 rounded-full" key={e} onClick={() => props.filterValue(e)}>{e}</button>
            );
          })}
          <button className="bg-black text-white p-1 pl-2 pr-2 rounded-full" onClick={() => props.setData(data)}>All</button>
        </div>
      </div>
    </>
  )
}

export default Button;
