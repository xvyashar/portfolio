import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Context } from "./utils/context";

import { useState } from "react";

import "./App.scss";

function App() {
  const [activePage, setActivePage] = useState("HOME");

  return (
    <div>
      <Context.Provider value={[activePage, setActivePage]}>
        <Header />
        <Outlet />
      </Context.Provider>
    </div>
  );
}

export default App;
