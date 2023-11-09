import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Beranda from "../modul/beranda_page";
import DetailPage from "../modul/detail_page";
import CheckoutPage from "../modul/checkout_page";
import Layout from "./component/layout";
import { Provider } from "react-redux";
import store_redux from "../util/store_redux";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Beranda />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

const LayoutRouter = () => {
  return (
    <Provider store={store_redux}>
      <RouterProvider router={routes} />
    </Provider>
  );
};

export default LayoutRouter;
