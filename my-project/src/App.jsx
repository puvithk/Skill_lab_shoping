import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import Navbar from './assets/Pages/navBar'
import Home from './assets/Pages/home'
import Data from './assets/Pages/data'
import Button from './assets/Pages/button'
import CartShop from './assets/Pages/cartShop'

function App() {
  const [data, setData] = useState(Data)
  const [newData, setNewData] = useState(Data)
  const category = [...new Set(Data.map((item) => item.cat))];

  const filterValue = (cat) => {
    const newValue = Data.filter((newvalue) => newvalue.cat === cat);
    setData(newValue);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home Data={data}
              realDate ={Data}
              filterValue={filterValue}
              setData ={setData} 
              category={category}/>
            }
          />
          <Route
            path="/cart"
            element={
              <CartShop Data={newData} />
            }
          />
        </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
