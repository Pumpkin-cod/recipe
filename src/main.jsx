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
import Slider from "./components/Slider";
import slides from "./components/slider.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";


const App = () => {
  return (
    <div className="engulf">
      <Navbar />
      <Slider slides={slides} />
    </div>
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
        path: "contact",
        element: <Contact />,
      },
      {
        path: "recipes",
        element: <Recipes />,
      },
    ]
  }


]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);