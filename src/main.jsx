import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import MainLayout from "./layouts/MainLayout.jsx";

import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { Supplements, SupplementsLoader } from "./pages/Supplements.jsx";
import ProjectAbout from "./pages/ProjectAbout.jsx";

import { ThemeProvider } from "./contexts/ThemeContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/supplements",
        element: <Supplements />,
        loader: SupplementsLoader,
      },
      { path: "/project-about", element: <ProjectAbout /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
