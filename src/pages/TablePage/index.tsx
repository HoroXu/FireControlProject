import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import "./index.less";
import {
  queryNewsArea,
  queryEngineeringCase,
  searchService,
} from "../../services/index";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const TablePage: React.FC = (props: any) => {
  const [tableList, setTableList] = useState([]);
  const [caseList, setCaseList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const queryNewsAreaFn = async (
    mc: number,
    pageNum: number,
    pageSize: number,
    keyWord?: string
  ) => {
    const res = await queryNewsArea(mc, pageNum, pageSize, keyWord);
    setTableList(res.rows);
  };

  const queryEngineeringCaseFn = async (
    mc: number,
    pageNum: number,
    pageSize: number
  ) => {
    const res = await queryEngineeringCase(mc, pageNum, pageSize);
    setCaseList(res.rows);
  };

  const detailFn = (docId: any) => {
    window.sessionStorage.setItem("docId", docId);
  };

  const searchFn = async (searchVal: string) => {
    const res = await searchService(searchVal);
    setSearchList(res.rows);
  };
  useEffect(() => {
    console.log(props.mc, "缓存====");
    const mc = Number(props.mc);
    queryNewsAreaFn(mc, 1, 10);
    queryEngineeringCaseFn(mc, 1, 10);
  }, [props.mc]);

  useEffect(() => {
    const searchVal = window.sessionStorage.getItem("searchVal") || "";
    searchFn(searchVal);
    return () => {
      window.sessionStorage.setItem(searchVal, "");
    };
  }, []);

  return (
    <div className="table-page">
      {tableList.length > 0 &&
        tableList.map((item: any) => {
          return (
            <div className="table-item">
              <Link to="/DetailPage">
                <span onClick={() => detailFn(item.id)}>{item.title}</span>
              </Link>

              <div className="right-item">
                {item.updateTime && (
                  <span className="item-time">
                    [{item.updateTime.split(" ")[0]}]
                  </span>
                )}
                <span>(点击4314)</span>
              </div>
            </div>
          );
        })}
      {caseList.length > 0 &&
        caseList.map((item: any) => {
          return (
            <div className="table-item">
              <Link to="/DetailPage">
                <span onClick={() => detailFn(item.id)}>{item.name}</span>
              </Link>

              <div className="right-item">
                {item.updateTime && (
                  <span className="item-time">
                    [{item.updateTime.split(" ")[0]}]
                  </span>
                )}
                <span>(点击4314)</span>
              </div>
            </div>
          );
        })}
      {searchList.length > 0 &&
        searchList.map((item: any) => {
          return (
            <div className="table-item">
              <Link to="/DetailPage">
                <span onClick={() => detailFn(item.id)}>{item.title}</span>
              </Link>
              <div className="right-item">
                {item.updateTime && (
                  <span className="item-time">
                    [{item.updateTime.split(" ")[0]}]
                  </span>
                )}
                <span>(点击4314)</span>
              </div>
            </div>
          );
        })}
      <div className='pagination-area'>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};
function mapStateToProps(state: any) {
  return { mc: state.mc };
}
export default connect(mapStateToProps)(TablePage);
