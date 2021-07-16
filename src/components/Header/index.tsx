import React from "react";
import "./index.less";
const Header = () => {
  const menuArr = [
    "首页",
    "公司简介",
    "新闻资讯",
    "工程案例",
    "公司荣誉",
    "检测设备",
    "检测流程",
    "人才招聘",
    "联系我们",
  ];
  return (
    <div className="header-area">
      <div className="header-container">
        {menuArr.map((item) => {
          return <div className="menu-item">{item}</div>;
        })}
        <input className='input-area'/>
      </div>
    </div>
  );
};

export default Header;
