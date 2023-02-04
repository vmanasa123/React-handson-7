import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Edit from "./Component/Edit";
import Table from "./Component/Table";
import Store from "./Component/Store";
import NavigationLinks from "./Component/NavigationLinks";
import Error from "./Component/Error";

function App() {
  return (
    <div>
      
      <Provider store={Store}>
        <Routes>
           <Route path="/" element={<NavigationLinks/>}>
            <Route index element={<Table />} />
         
            <Route path="/editStudent" element={<Edit />} />
            <Route path="/addStudent" element={<Edit />} />
            <Route path="/Home" element={<Home message="Home" />} />
            <Route path="/Contact" element={<Home message="Contact Us" />} />

            <Route path="*" element={<Error/>} />
          </Route>
        </Routes>
      </Provider>

    </div>
  );
}

export default App