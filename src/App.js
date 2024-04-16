import { useRoutes } from "react-router-dom";
import "./App.css";

// import Products from "./components/Products/Products";
// import Comments from "./components/Comments/Comments";
// import Discount from "./components/Discount/Discount";
import Sidebar from "./components/Sidebar/Sidebar";
// import Orders from "./components/Orders/Orders";
import Header from "./components/Header/Header";
// import Users from "./components/Users/Users";
import routes from "./Routes/Routes";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />

        {/* Router Handling */}
        {/* first way */}
        {/* <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/discounts" element={<Discount />} />
        </Routes> */}

        {/* second way / optimize */}
        {router}
      </div>
    </>
  );
}

export default App;
