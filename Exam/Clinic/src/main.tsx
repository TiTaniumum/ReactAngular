import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DoctorListPage from "./pages/DoctorListPage/DoctorListPage";
import { ContextProvider } from "./components/ContextProvider.tsx";
import CEditDoctor from "./components/CEditDoctor/CEditDoctor.tsx";
import CSchedule from "./components/CSchedule/CSchedule.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <DoctorListPage /> },
      { path: "/edit/:id", element: <CEditDoctor/>},
      { path: "/schedule/:id", element: <CSchedule/>}
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
