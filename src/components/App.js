import React, { useState } from "react";
import "../styles/app.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  const [userID, setUserID] = useState("");

  const handleLogin = (response) => {
    setUserID(response.id);
  };

  const handleLogout = () => {
    window.FB.logout();
    setUserID("");
  };

  return (
    <div className="app">
      <Navbar onLogin={handleLogin} userID={userID} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Properties userID={userID} />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;
