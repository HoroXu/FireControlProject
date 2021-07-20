import React, { useState, useEffect } from "react";
import "./index.less";
import { queryMenu } from "../../services/index";

interface BottomPropsInterface {
  contactState: any;
}
const Bottom = (props: BottomPropsInterface) => {
  const { contactState } = props;
  const [menu, setMenu] = useState([]);
  const queryMenuFn = async () => {
    const res = await queryMenu(true);
    setMenu(res);
  };
  useEffect(() => {
    queryMenuFn();
  }, []);
  return (
    <div className="bottom-area">
      <div className="top-title">
        {menu.map((item: any, index: number) => {
          return (
            <a href={item.url}>
              {menu.length === index + 1
                ? `${item.menuName}`
                : `${item.menuName} | `}
            </a>
          );
        })}
        {/* 网站首页 | 公司简介 | 新闻资讯 | 工程案例 | 公司荣誉 | 人才招聘 |
        检测流程 |在线留言 | 联系方式 */}
      </div>
      <div className="copyright">
        {contactState.Copyright && contactState.Copyright.remark}
      </div>
      <div className="copyright">
        联系地址: {contactState.addr && contactState.addr.remark}
      </div>
    </div>
  );
};
export default Bottom;
