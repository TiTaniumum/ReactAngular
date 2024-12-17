import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CitiesPage from './pages/CitiesPage.tsx'
import CityInfo from './pages/CityInfo.tsx'
import CityAttractions from './pages/CityAttractions.tsx'

const router = createBrowserRouter([
  { path: "/", element: <App />},
  { path: "/Cities", element: <CitiesPage/> },
  { path: "/CityInfo/:name", element: <CityInfo/>},
  { path: "/CityAttractions/:name", element: <CityAttractions/> }  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
