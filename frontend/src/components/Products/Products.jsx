import React, { useEffect, useState } from "react";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductTable from "../ProductTable/ProductTable";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((products) => setAllProducts(products));
  };

  return (
    <>
      <AddNewProduct getAllProducts={getAllProducts} />
      {/* <ErrorBox msg={"هیچ محصولی یافت نشد"} /> */}
      <ProductTable allProducts={allProducts} getAllProducts={getAllProducts} />
    </>
  );
};

export default Products;
