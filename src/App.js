import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./Components/Header/header";
import Login from "./Components/Signup-Login/Login";
import Signup from "./Components/Signup-Login/Signup";
import Protected from "./Components/Protected/protected"
import AddNewProperty from "./Components/AddNewProperty/addnewproperty";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/Signup" element={<Signup/>} />
    <Route
          path="/addnewproperty"
          element={
            <Protected>
              <AddNewProperty />
            </Protected>
          }
        ></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;