import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import BasicCardPage from "./pages/BasicCardPage";
import PropsCardPage from "./pages/PropsCardPage";
import DynamicCardPage from "./pages/DynamicCardPage";
import ErrorPage from "./pages/ErrorPage";
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "spotify-cards/basic", element: <BasicCardPage /> },
      { path: "spotify-cards/props", element: <PropsCardPage /> },
      { path: "spotify-cards/dynamic", element: <DynamicCardPage /> },
    ],
  },
]);

export default function App() {
  // El RouterProvider hace todo el trabajo de ruteo
  return <RouterProvider router={router} />;
}