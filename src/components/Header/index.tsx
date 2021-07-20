import React, { useState, useEffect } from "react";
import "./index.less";
import { queryMenu } from "../../services/index";
import { Menu } from "antd";
const { SubMenu } = Menu;

const Header = () => {
  // const menuArr = [
  //   "首页",
  //   "公司简介",
  //   "新闻资讯",
  //   "工程案例",
  //   "公司荣誉",
  //   "检测设备",
  //   "检测流程",
  //   "人才招聘",
  //   "联系我们",
  // ];
  const [menuArr, setMenuArr] = useState([]);
  const queryMenuFn = async () => {
    const res = await queryMenu();
    setMenuArr(res);
  };
  useEffect(() => {
    queryMenuFn();
  }, []);
  return (
    <div className="header-area">
      <div className="header-container">
        <Menu mode="horizontal">
          {menuArr.map((item: any) => {
            return (
              <SubMenu key={item.menuId} title={item.menuName}>
                {item.children &&
                  item.children.map((childrenItem: any) => {
                    return (
                      <Menu.Item key={childrenItem.menuId}>
                        {childrenItem.menuName}
                      </Menu.Item>
                    );
                  })}
              </SubMenu>
            );
          })}
        </Menu>
        <input className="input-area" />
      </div>
      {/* <div className="header-container">
        {menuArr.map((item) => {
          return <div className="menu-item">{item}</div>;
        })}
        <input className="input-area" />
      </div> */}
    </div>
  );
};

export default Header;
