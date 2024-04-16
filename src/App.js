import { Route, Routes } from "react-router-dom";
import "./App.css";

import Products from "./components/Products/Products";
import Comments from "./components/Comments/Comments";
import Discount from "./components/Discount/Discount";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Orders from "./components/Orders/Orders";
import Users from "./components/Users/Users";

function App() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />

        {/* Router Handling */}

        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/discounts" element={<Discount />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
