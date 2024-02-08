/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes ,Switch } from 'react-router-dom';

import "./App.css";
import Home from "./Home";
import SearchPage  from "./Search";

function App() {
  return (
    <div className="">
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes> */}
         <Router>
      
        <Route path="/" exact component={Home} />
        
        <Route path="/search" component={SearchPage} />
      
    </Router>
    </div>
  );
}

export default App;
