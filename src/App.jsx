import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import HomePage from "./pages/home/HomePage";

import ErrorPage from "./pages/error/ErrorPage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
