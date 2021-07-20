import React, { useState, useEffect } from "react";
import "./index.less";
import { queryEngineeringCase } from "../../../services/index";
const EngineeringCase = () => {
  const [caseArr, setCaseArr] = useState([]);

  const queryEngineeringCaseFn = async () => {
    const res = await queryEngineeringCase(2021, 5, 1);
    setCaseArr(res);
  };
  useEffect(() => {
    queryEngineeringCaseFn();
  }, []);
  return (
    <div className="engineering-case">
      <div className="case-title">
        <div>
          <span className="case-icon"></span>
          <span className="case-text">工程案例</span>
        </div>
        <span>MORE</span>
      </div>
      <div className="case-container">
        {caseArr.map((item: any, index) => {
          if (index < 6) {
            return (
              <div
                className={
                  index > 2 ? "case-content content-margin" : "case-content"
                }
              >
                <img src={item.pic} className="case-img" />
                <div className="content-title">{item.name}</div>
                <div className="content-num">编号：{item.num}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default EngineeringCase;
