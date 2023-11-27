import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserDirectory from "./components/UserDirectory/UserDirectory";
import UserDetail from "./components/UserDetail/UserDetail"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserDirectory />} />
        <Route path='/user/:userId' element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
