import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './components/LayOut.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<LayOut/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true, element:<Home/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
