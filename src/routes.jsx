import { createBrowserRouter } from "react-router-dom";
import { loaderProduct } from "./components/Details";

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
