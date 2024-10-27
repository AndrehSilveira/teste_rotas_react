import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Configurando router
import{  createBrowserRouter,  RouterProvider, Navigate } from 'react-router-dom';

import Home from './routes/home';
import Contact from './routes/contact';
import ErrorPage from './routes/errorPage';
import ContactDetails from './routes/ContactDetails';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "contact",
//     element: <Contact />
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      // Nested routes - identificador único
      {
        path: "/contact/:id",
        element: <ContactDetails />
      },
      // Navegar para páginas não existentes
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
