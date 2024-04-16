import React from "react";
import "./sideBar.css";
import { IoHomeOutline } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import { RiDiscountPercentLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید.</h1>
      <ul className="sidebar-links">
        <li className="active">
          <a href="/">
            <IoHomeOutline className="icons" />
            صفحه اصلی
          </a>
        </li>
        <li>
          <a href="/">
            <MdProductionQuantityLimits className="icons" />
            مقدار محصولات
          </a>
        </li>
        <li>
          <a href="/">
            <BiCommentDetail className="icons" />
            کامنت ها
          </a>
        </li>
        <li>
          <a href="/">
            <BsBagCheck  className="icons"/>
            سفارشات
          </a>
        </li>
        <li>
          <a href="/">
            <FiUsers className="icons" />
            کاربران
          </a>
        </li>
        <li>
          <a href="/">
            <RiDiscountPercentLine className="icons" />
            تخفیفات
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
