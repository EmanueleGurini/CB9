import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import { UserProvider } from "./context/UserContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);

const Main = () => {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
