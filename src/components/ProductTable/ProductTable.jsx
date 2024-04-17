import React from "react";
import "./productTable.css";

const ProductTable = () => {
  return (
    <table className="products-table">
      <tr className="product-table-heading-tr">
        <th>عکس</th>
        <th>اسم</th>
        <th>قیمت</th>
        <th>موجودی</th>
      </tr>
      <tr className="product-table-tr">
        <td>
          <img src="/img/oil.jpeg" alt="oil" className="product-table-img" />
        </td>
        <td>روغن سرخ کردنی</td>
        <td>92 هزار تومان</td>
        <td>82</td>
        <td>
          <button className="product-table-btn">جزییات</button>
          <button className="product-table-btn">حذف</button>
          <button className="product-table-btn">ویرایش</button>
        </td>
      </tr>
    </table>
  );
};

export default ProductTable;


