import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  StaticRouterProvider,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import PaintingsPage from "./pages/PaintingsPage.tsx";
import PaintingPage from "./pages/PaintingPage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <NotFoundPage /> },
  { path: "/", element: <App />, errorElement: <NotFoundPage /> },
  { path: "/home", element: <HomePage /> },
  {
    path: "/users",
    element: <UsersPage />,
    children: [{ path: "/users/:userId", element: <UserPage /> }],
  },
  // {path: '/users/:userId', element: <UserPage/>}
  {path: "/paintings", element: <PaintingsPage/>},
  {path: "/painting/:id", element: <PaintingPage/>}
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
