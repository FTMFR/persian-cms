import React from "react";
import './sideBar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید.</h1>
      <ul className="sidebar-links">
        <li className="active">
          <a href="/">صفحه اصلی</a>
        </li>
        <li>
          <a href="/">مقدار محصولات</a>
        </li>
        <li>
          <a href="/">کامنت ها</a>
        </li>
        <li>
          <a href="/">سفارشات</a>
        </li>
        <li>
          <a href="/">کاربران</a>
        </li>
        <li>
          <a href="/">تخفیفات</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
