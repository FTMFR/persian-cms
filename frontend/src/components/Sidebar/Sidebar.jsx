import { MdProductionQuantityLimits } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import {  NavLink } from "react-router-dom";
import React from "react";
import "./sideBar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید.</h1>
      <ul className="sidebar-links">
        <NavLink to="/">
          <IoHomeOutline className="icons" />
          صفحه اصلی
        </NavLink>
        <NavLink to="/products">
          <MdProductionQuantityLimits className="icons" />
          محصولات
        </NavLink>
        <NavLink to="/comments">
          <BiCommentDetail className="icons" />
          کامنت ها
        </NavLink>
        <NavLink to="/orders">
          <BsBagCheck className="icons" />
          سفارشات
        </NavLink>
        <NavLink to="/users">
          <FiUsers className="icons" />
          کاربران
        </NavLink>
        <NavLink to="/discounts">
          <RiDiscountPercentLine className="icons" />
          تخفیفات
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
