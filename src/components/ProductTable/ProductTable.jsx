import React, { useState } from "react";
import "./productTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";

const ProductTable = () => {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);

  const deleteModalCancleAction = () => {
    setIsShowDeleteModal(false);
    console.log("مدال کنسل شد");
  };

  const deleteModalSubmitAction = () => {
    setIsShowDeleteModal(false);
    console.log("مدال تایید شد");
  };

  const closeDetailModal = () => {
    setIsShowDetailModal(false);
    console.log("مدال جزییات بسته شد");
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
              <button
                className="product-table-btn"
                onClick={() => setIsShowDetailModal(true)}
              >
                جزییات
              </button>
              <button
                className="product-table-btn"
                onClick={() => setIsShowDeleteModal(true)}
              >
                حذف
              </button>
              <button className="product-table-btn">ویرایش</button>
            </td>
          </tr>
        </tbody>
      </table>
      {isShowDeleteModal && (
        <DeleteModal
          submit={deleteModalSubmitAction}
          cancle={deleteModalCancleAction}
        />
      )}
      {isShowDetailModal && <DetailsModal onHide={closeDetailModal} />}
    </>
  );
};

export default ProductTable;
