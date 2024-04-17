import React from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductTable from "../ProductTable/ProductTable";

const Products = () => {
  return (
    <>
      <AddNewProduct />
      <ErrorBox msg={"هیچ محصولی یافت نشد"} />
      <ProductTable />
    </>
  );
};

export default Products;
