import React from 'react';
import {createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import './App.css';
import TopNav from "./components/TopNav";
import {Classes} from "@blueprintjs/core";

import RoomList from "./rooms/RoomList";
function App() {
let rootClass = "app-root";
rootClass = `${rootClass} ${Classes.DARK}`;
document.body.style.backgroundColor = "#30404d";

  return (
      <div
          className={rootClass}
          style={{display: "flex", flexDirection: "column", height: "100vh"}}
      >
          <TopNav/>
          <main
              style={{
                  flexGrow: "1",
                  marginTop: "50px",
                  padding: "10px",
                  width: "100%",
              }}
          >
              <Routes>

                  <Route path="/rooms" element={<RoomList/>}/>
              </Routes>
          </main>

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

