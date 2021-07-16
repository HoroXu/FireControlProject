import React from "react";
import "./index.less";

const Links = () => {
  return (
    <div className="links-container">
      <div className="links-title">
        <span className="title-line"></span>
        <span className="title-content">友情链接</span>
        <span className="title-line"></span>
      </div>
      <div className="links-area">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(() => {
          return <div className="links-item">南京消防检测</div>;
        })}
      </div>
    </div>
  );
};
export default Links;
