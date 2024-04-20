import React, { useEffect, useState } from "react";
import "./productTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
import ErrorBox from "../ErrorBox/ErrorBox";

const ProductTable = () => {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [isShowEditlModal, setIsShowEditModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productID, setProductID] = useState(null);
  const [mainProductInfo, setMainProductInfo] = useState({});

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((products) => setAllProducts(products));
  };

  const deleteModalCancleAction = () => {
    console.log("مدال کنسل شد");
    setIsShowDeleteModal(false);
  };

  const deleteModalSubmitAction = () => {
    console.log("مدال تایید شد");
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowDeleteModal(false);
        getAllProducts();
      });
  };

  const closeDetailModal = () => {
    setIsShowDetailModal(false);
    console.log("مدال جزییات بسته شد");
  };

  const submitEditModal = (e) => {
    setIsShowEditModal(false);
    e.preventDefault();
    console.log("محصول ویرایش شد");
  };

  return (
    <>
      {allProducts.length ? (
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
            {allProducts.map((product) => (
              <tr className="product-table-tr" key={product.id}>
                <td>
                  <img
                    src={product.img}
                    alt="product"
                    className="product-table-img"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price} هزار تومان</td>
                <td>{product.count}</td>
                <td>
                  <button
                    className="product-table-btn"
                    onClick={() => {
                      setIsShowDetailModal(true);
                      setMainProductInfo(product);
                    }}
                  >
                    جزییات
                  </button>
                  <button
                    className="product-table-btn"
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setProductID(product.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="product-table-btn"
                    onClick={() => setIsShowEditModal(true)}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg="هیچ محصولی یافت نشد." />
      )}
      {isShowDeleteModal && (
        <DeleteModal
          submit={deleteModalSubmitAction}
          cancle={deleteModalCancleAction}
        />
      )}
      {isShowDetailModal && (
        <DetailsModal onHide={closeDetailModal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>محبوبیت</th>
                <th>فروش</th>
                <th>رنگ بندی</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{mainProductInfo.popularity}</td>
                <td>{mainProductInfo.sale}</td>
                <td>{mainProductInfo.colors}</td>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
      )}
      {isShowEditlModal && (
        <EditModal
          onClick={() => setIsShowEditModal(false)}
          onSubmit={submitEditModal}
        >
          {/* Children */}

          <div className="edit-product-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="اسم محصول جدید را وارد کنید."
              className="edit-product-input"
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="محبوبیت جدید را وارد کنید."
              className="edit-product-input"
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="تنوع جدید را وارد کنید."
              className="edit-product-input"
            />
          </div>
          <div className="edit-product-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="قیمت جدید را وارد کنید."
              className="edit-product-input"
            />
          </div>
        </EditModal>
      )}
    </>
  );
};

export default ProductTable;
