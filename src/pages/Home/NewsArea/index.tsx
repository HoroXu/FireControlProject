import React, { useState, useEffect } from "react";
import News from "@/assets/images/news.png";
import "./index.less";
import { queryNewsArea } from "../../../services/index";
const NewsArea = (props: any) => {
  const { titleZh = "", titleEn = "", data } = props;
  const [newsArr, setNewsArr] = useState([]);

  // const queryNewsAreaFn = async () => {
  //   const res = await queryNewsArea(2010, 2, 10, "");
  //   setNewsArr(res.rows);
  // };
  useEffect(() => {
    console.log(data, "data===");
    setNewsArr(data || []);
  }, [data]);
  return (
    <div className="news-area">
      <section className="news-title">
        <div className="title-left">
          <img src={News} className="title-img" />
          <span className="title-zh">{titleZh}</span>
          <span className="title-en">{titleEn}</span>
        </div>
        <div className="more">MORE</div>
      </section>
      <section className="news-items">
        {newsArr.length > 0 &&
          newsArr.map((item: any, index) => {
            if (index < 3) {
              return (
                <div className="single-item">
                  <div className="item-title">{item.title}</div>
                  <div className="item-content">{item.subTitle}</div>
                </div>
              );
            }
          })}

        {/* <div className="single-item">
          <div className="item-title">
            热烈祝贺竞标“（南京地铁）宁天国际一期工程消防检测项目是江苏海外集团国际
          </div>
          <div className="item-content">
            南京宁天城际一期工程消防检测项目是江苏海外集团国际工国际工国际
          </div>
        </div>
        <div className="single-item">
          <div className="item-title">
            热烈祝贺竞标“（南京地铁）宁天国际一期工程消防检测项目是江苏海外集团国际
          </div>
          <div className="item-content">
            南京宁天城际一期工程消防检测项目是江苏海外集团国际工国际工国际
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default NewsArea;
