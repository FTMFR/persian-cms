import React, { useState } from "react";
import "./addNewProduct.css";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineColorLens } from "react-icons/md";
import { MdOutlinePointOfSale } from "react-icons/md";
import { IoImagesOutline } from "react-icons/io5";
import { IoPricetagsOutline } from "react-icons/io5";

const AddNewProduct = ({ getAllProducts }) => {
  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductCount, setNewProductCount] = useState("");
  const [newProductPopularity, setNewProductPopularity] = useState("");
  const [newProductSale, setNewProductSale] = useState("");
  const [newProductColors, setNewProductColors] = useState("");
  const [newProductImg, setNewProductImg] = useState("");

  const newProductsInfos = {
    title: newProductTitle,
    price: newProductPrice,
    count: newProductCount,
    img: newProductImg,
    popularity: newProductPopularity,
    sale: newProductSale,
    colors: newProductColors,
  };

  const addNewProduct = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8000/api/products`, {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify(newProductsInfos),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        getAllProducts();
        emptyInput();
      });
  };

  
  function emptyInput() {
    setNewProductTitle("");
    setNewProductPrice("");
    setNewProductCount("");
    setNewProductPopularity("");
    setNewProductSale("");
    setNewProductColors("");
    setNewProductImg("");
  }

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
              value={newProductTitle}
              onChange={(e) => setNewProductTitle(e.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <IoPricetagsOutline className="icons" />
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              className="add-product-input"
              value={newProductPrice}
              onChange={(e) => setNewProductPrice(e.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <MdOutlineInventory className="icons" />
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              className="add-product-input"
              value={newProductCount}
              onChange={(e) => setNewProductCount(e.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <IoImagesOutline className="icons" />
            <input
              type="text"
              placeholder="ادرس عکس محصول را بنویسید"
              className="add-product-input"
              value={newProductImg}
              onChange={(e) => setNewProductImg(e.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <GrFavorite className="icons" />
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید"
              className="add-product-input"
              value={newProductPopularity}
              onChange={(e) => setNewProductPopularity(e.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <MdOutlinePointOfSale className="icons" />
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              className="add-product-input"
              value={newProductSale}
              onChange={(e) => setNewProductSale(e.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <MdOutlineColorLens className="icons" />
            <input
              type="text"
              placeholder="تعداد رنگ بندی محصول را بنویسید"
              className="add-product-input"
              value={newProductColors}
              onChange={(e) => setNewProductColors(e.target.value)}
            />
          </div>
        </div>
        <button className="add-new-product-btn" onClick={(e)=>addNewProduct(e)}>
          ثبت محصول
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
