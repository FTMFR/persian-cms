import React from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";

const Products = () => {
  return (
    <>
      <AddNewProduct />
      <ErrorBox msg={"هیچ محصولی یافت نشد"} />
    </>
  );
};

export default Products;
