import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import { ProtectedRoute } from "./contexts/Auth";

const HeaderLayout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project/:id",
        element: (
          <ProtectedRoute>
            <ProjectPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
