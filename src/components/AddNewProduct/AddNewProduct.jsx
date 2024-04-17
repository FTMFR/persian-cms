import React from "react";
import "./addNewProduct.css";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineColorLens } from "react-icons/md";
import { MdOutlinePointOfSale } from "react-icons/md";
import { IoImagesOutline } from "react-icons/io5";
import { IoPricetagsOutline } from "react-icons/io5";

const AddNewProduct = () => {
  return (
    <div className="product-main">
      <h1 className="product-title">افزودن محصول جدید</h1>
      <form action="#" className="add-product-form">
        <div className="add-product-form-wrap">
          <div className="add-product-form-group">
            <MdDriveFileRenameOutline className="icons" />
            <input
              type="text"
              placeholder="اسم محصول را بنویسید"
              className="add-product-input"
            />
          </div>
          <div className="add-product-form-group">
            <IoPricetagsOutline className="icons" />
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              className="add-product-input"
            />
          </div>
          <div className="add-product-form-group">
            <MdOutlineInventory className="icons" />
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              className="add-product-input"
            />
          </div>
          <div className="add-product-form-group">
            <IoImagesOutline className="icons" />
            <input
              type="text"
              placeholder="ادرس عکس محصول را بنویسید"
              className="add-product-input"
            />
          </div>
          <div className="add-product-form-group">
            <GrFavorite className="icons" />
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید"
              className="add-product-input"
            />
          </div>
          <div className="add-product-form-group">
            <MdOutlinePointOfSale className="icons" />
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              className="add-product-input"
            />
          </div>
          <div className="add-product-form-group">
            <MdOutlineColorLens className="icons" />
            <input
              type="text"
              placeholder="تعداد رنگ بندی محصول را بنویسید"
              className="add-product-input"
            />
          </div>
        </div>
        <button className="add-new-product-btn">ثبت محصول</button>
      </form>
    </div>
  );
};

export default AddNewProduct;
