import React, { useState, useEffect } from "react";
import "./index.less";
import { queryMenu, queryRecord } from "../../services/index";

interface BottomPropsInterface {
  contactState: any;
}
const Bottom = (props: BottomPropsInterface) => {
  const { contactState } = props;
  const [menu, setMenu] = useState([]);
  const [recordArr, setRecordArr] = useState([]);
  // const [str, setStr] = useState("");
  // const [copyrightRight, setCopyrightRight] = useState("");
  const queryMenuFn = async () => {
    const res = await queryMenu(true);
    setMenu(res);
  };
  const queryRecordFn = async (linkType: number) => {
    const res = await queryRecord(linkType);
    setRecordArr(res);
  };
  // const strFn = () => {
  //   if (contactState.Copyright) {
  //     const copyrightArr = contactState.Copyright.remark.split(" ");
  //     const copyrightRightTemp = copyrightArr[copyrightArr.length - 1];
  //     let strTemp = "";
  //     for (let i = 0; i < copyrightArr.length; i++) {
  //       if (i < copyrightArr.length - 1) {
  //         strTemp = strTemp + [i];
  //       }
  //     }
  //     console.log(strTemp, "strTemp===");
  //     setStr(strTemp);
  //     setCopyrightRight(copyrightRightTemp);
  //   }
  // };
  useEffect(() => {
    queryMenuFn();
    queryRecordFn(4);
    // strFn();
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
        {recordArr[0] && (
          <a href={recordArr[0].linkUrl} target="_blank">
            <img src={recordArr[0].linkPicUrl} title={recordArr[0].linkTitle} />
          </a>
        )}
        {contactState.Copyright && contactState.Copyright.remark}&nbsp;
        {recordArr[1] && (
          <a href={recordArr[1].linkUrl} target="_blank">
            {recordArr[1].linkTitle}
          </a>
        )}
      </div>
      <div className="copyright">
        联系地址: {contactState.addr && contactState.addr.remark}
      </div>
    </div>
  );
};
export default Bottom;
