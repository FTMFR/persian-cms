import React, { useState } from "react";
import "./productTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";

const ProductTable = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const deleteModalCancleAction = () => {
    setIsShowModal(false);
    console.log("مدال کنسل شد");
  };

  const deleteModalSubmitAction = () => {
    setIsShowModal(false);
    console.log("مدال سابمیت شد");
  };

  return (
    <>
      <table className="products-table">
        <thead>
          <tr className="product-table-heading-tr">
            <th>عکس</th>
            <th>اسم</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          <tr className="product-table-tr">
            <td>
              <img
                src="/img/oil.jpeg"
                alt="oil"
                className="product-table-img"
              />
            </td>
            <td>روغن سرخ کردنی</td>
            <td>92 هزار تومان</td>
            <td>82</td>
            <td>
              <button className="product-table-btn">جزییات</button>
              <button
                className="product-table-btn"
                onClick={() => setIsShowModal(true)}
              >
                حذف
              </button>
              <button className="product-table-btn">ویرایش</button>
            </td>
          </tr>
        </tbody>
      </table>
      {isShowModal && (
        <DeleteModal
          submit={deleteModalSubmitAction}
          cancle={deleteModalCancleAction}
        />
      )}
    </>
  );
};

export default ProductTable;
