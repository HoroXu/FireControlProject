import React, { useState, useEffect } from "react";
import "./index.less";
import { queryMenu, queryNewsArea } from "../../services/index";
import { Menu, Input } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { queryMc } from "../../redux/Page/actions";
import history from "../../utils/history";
const { SubMenu } = Menu;
const { Search } = Input;

const Header = (props: any) => {
  const [menuArr, setMenuArr] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const queryMenuFn = async () => {
    const res = await queryMenu();
    setMenuArr(res);
  };
  const menuFn = (mc: string) => {
    window.sessionStorage.setItem("mc", mc);
    props.queryMc(mc);
    setSelectedItem(mc);
  };
  const onSearch = (value: any) => {
    console.log(value);
    window.sessionStorage.setItem("searchVal", value);
    history.push("/TablePage");
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
              <Link to={item.menuId === 2001 ? "/" : "/TablePage"}>
                <SubMenu
                  key={item.menuId}
                  title={item.menuName}
                  onTitleClick={() => {
                    menuFn(item.menuId);
                  }}
                  className={
                    selectedItem === item.menuId ? "selected-item" : ""
                  }
                >
                  {item.children &&
                    item.children.map((childrenItem: any) => {
                      return (
                        <Menu.Item key={childrenItem.menuId}>
                          {childrenItem.menuName}
                        </Menu.Item>
                      );
                    })}
                </SubMenu>
              </Link>
            );
          })}
        </Menu>
        {/* <Input className="input-area" /> */}
        <Search
          // placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
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
function mapStateToProps(state: any) {
  return {};
}
function mapDispatchToProps(dispatch: any) {
  return {
    queryMc: (val: any) => {
      dispatch(queryMc(val));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
