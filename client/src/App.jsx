import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import RegisterUser from "./pages/Register";
import { Login } from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/register",
          element: <RegisterUser />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
