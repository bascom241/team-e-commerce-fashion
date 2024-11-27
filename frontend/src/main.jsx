import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayOut from "./components/LayOut.jsx";
import Home from "./pages/Home/Home.jsx";
import ProfilePage from "./components/Profile/ProfilePage";
import Order from "./components/Order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "order", element: <Order /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
