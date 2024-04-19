import React from "react";
import "./header.css";
import { FaRegBell } from "react-icons/fa";
import { BsBrightnessHigh } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <div className="admin-profile">
        <img src="./img/profile.avif" alt="admin profile" />
        <div>
          <h1>نام و نام خانوادگی ادمین</h1>
          <h3>سمت در سایت</h3>
        </div>
      </div>
      <div className="header-left-section">
        <div className="search-box">
          <input type="text" placeholder="جستجو کنید..." />
          <button>جستجو</button>
        </div>
        <button className="header-left-icons">
          <FaRegBell />
        </button>
        <button className="header-left-icons">
          <BsBrightnessHigh />
        </button>
      </div>
    </div>
  );
};

export default Header;
