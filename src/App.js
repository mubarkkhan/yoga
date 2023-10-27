import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home/home";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"

function India(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export{India}