import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AddNewProperty from "./Components/AddNewProperty/addnewproperty";
import Login from "./Components/Signup-Login/Login";
import Signup from "./Components/Signup-Login/Signup";
import Protected from "./Components/Protected/protected"
import Property from "./Components/property/Property";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/Signup" element={<Signup/>} />
    <Route
          path="/property"
          element={
            <Protected>
              <Property />
              
            </Protected>
          }
        ></Route>
        <Route
          path="/addnewproperty"
          element={
            <Protected>
              
              <AddNewProperty/>
            </Protected>
          }
        ></Route>
        {/* <Route element={<Protected></Protected>}>
                <Route path="/property" element={<Property/>}/>
                <Route path="/addnewproperty" element={<AddNewProperty/>}></Route>
            </Route> */}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;