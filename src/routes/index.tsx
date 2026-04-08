// src/routes/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import { LayoutDefault } from "../components/Layouts";
import { ROUTES } from "../constants/enums/routes";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDefault/>,
    children: [

      {
        path: ROUTES.HOME,
        element: <Home/>,
      },
      {
        path: ROUTES.SERVICES,
        element: <Services />,
      },
      {
        path: ROUTES.PROJECTS,
        element: <Projects />,
      },
      {
        path: ROUTES.ABOUT,
        element: <About />,
      },
      {
        path: ROUTES.CONTACTS,
        element: <Contacts />,
      }


    ]
  },

])



