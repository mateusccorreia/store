import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Card } from "./components/Card";
import Details, { loaderProduct } from "./components/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: 'products',
    element: <Card />
  },
  {
    path: 'products/:id',
    element: <Details />,
    loader: loaderProduct
  },
]);
