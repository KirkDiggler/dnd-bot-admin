import React from 'react';
import {createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import './App.css';
import TopNav from "./components/TopNav";
import {Classes, Colors} from "@blueprintjs/core";

import RoomList from "./rooms/RoomList";
function App() {
    document.body.style.backgroundColor = Colors.DARK_GRAY2;
  return (
    <div
      className={Classes.DARK}
      style={{display: "flex", flexDirection: "column", height: "100vh"}}
    >
      <TopNav/>
      <Routes>
          <Route path="/rooms" element={<RoomList/>}/>
      </Routes>

    </div>
  );
}
const router = createBrowserRouter([
    {
        path: "/*",
        element: <App />,
    },
]);

const AppRoot = () => {
    return <RouterProvider router={router} />;
};

export default AppRoot;

