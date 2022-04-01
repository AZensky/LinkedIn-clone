import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/MainFeed/Feed";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>

      {/* Widgets */}
    </div>
  );
}

export default App;
