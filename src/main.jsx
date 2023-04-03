import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About'
import Contact from "./components/Contact";
import Recipes from "./components/Recipes";
import Navbar from "./components/Navbar";
import "./style.css";


const App =() =>{
  return(
    <>
      <Navbar />
    </>
  )
}

const router = createBrowserRouter([

  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,

      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "about",
        element: <Contact />,
      },
      {
        path: "about",
        element: <Recipes />,
      },
    ]
  }

  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
