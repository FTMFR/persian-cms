import { MdProductionQuantityLimits } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import React from "react";
import "./sideBar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید.</h1>
      <ul className="sidebar-links">
        <li className="active">
          <Link to="/products">
            <IoHomeOutline className="icons" />
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link href="/products">
            <MdProductionQuantityLimits className="icons" />
            محصولات
          </Link>
        </li>
        <li>
          <Link to="/comments">
            <BiCommentDetail className="icons" />
            کامنت ها
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <BsBagCheck className="icons" />
            سفارشات
          </Link>
        </li>
        <li>
          <Link to="/users">
            <FiUsers className="icons" />
            کاربران
          </Link>
        </li>
        <li>
          <Link to="/discounts">
            <RiDiscountPercentLine className="icons" />
            تخفیفات
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
