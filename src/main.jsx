import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './components/LayOut.jsx';
import Home from './pages/Home/Home.jsx';
import Signup from './components/Account/SignUp.jsx';
import Login from './components/Account/Login.jsx';
import ResetPassword from './components/Account/ResetPassword.jsx';


const router = createBrowserRouter([{
  path: '/',
  element: <LayOut />,
  children: [
    { index: true, element: <Home /> }
  ]
},
{
  path: '/signup',
  element: <Signup />,
},
{
  path: "/login",
  element: <Login />
},
{
  path: "/reset",
  element: <ResetPassword/>
}

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
