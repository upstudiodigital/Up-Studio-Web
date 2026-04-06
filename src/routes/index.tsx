// src/routes/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import { LayoutDefault } from "../components/Layouts";



export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDefault/>,
    children: [

      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/servicos",
        element: <Services />,
      },
      {
        path: "/projetos",
        element: <Projects />,
      },
      {
        path: "/sobre",
        element: <About />,
      },
      {
        path: "/contato",
        element: <Contacts />,
      }


    ]
  },

])



