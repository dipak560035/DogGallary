import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import BreedList from "./pages/BreedList";
import BreedDetail from "./pages/BreedDetail";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "breeds", element: <BreedList /> },
        { path: "breeds/:breed", element: <BreedDetail /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
