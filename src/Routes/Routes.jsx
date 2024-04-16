import Comments from "../components/Comments/Comments";
import Discount from "../components/Discount/Discount";
import Products from "../components/Products/Products";
import Orders from "../components/Orders/Orders";
import Users from "../components/Users/Users";

const routes = [
  { path: "/products", element: <Products /> },
  { path: "/comments", element: <Comments /> },
  { path: "/users", element: <Users /> },
  { path: "/orders", element: <Orders /> },
  { path: "/discounts", element: <Discount /> },
];

export default routes;
