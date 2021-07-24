import React, { useState, useEffect } from "react";
import "./index.less";
import { queryCompanyInfo } from "../../services/index";

const Links = () => {
  const [linkState, setLinkState] = useState([]);
  const queryCompanyInfoFn = async () => {
    const res = await queryCompanyInfo(1);
    setLinkState(res);
  };

  useEffect(() => {
    queryCompanyInfoFn();
  }, []);
  return (
    <div className="links-container">
      <div className="links-title">
        <span className="title-line"></span>
        <span className="title-content">友情链接</span>
        <span className="title-line"></span>
      </div>
      <div className="links-area">
        {linkState.map((item: any) => {
          return (
            <a href={item.linkUrl} target="_Blank">
              <div className="links-item">{item.linkTitle}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Links;
