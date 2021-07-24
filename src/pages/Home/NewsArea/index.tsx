import React, { useState, useEffect } from "react";
import News from "@/assets/images/news.png";
import "./index.less";
import { queryNewsArea } from "../../../services/index";
import history from "../../../utils/history";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { queryMc } from "../../../redux/Page/actions";
const NewsArea = (props: any) => {
  const { titleZh = "", mc, data } = props;
  const [newsArr, setNewsArr] = useState([]);

  // const queryNewsAreaFn = async () => {
  //   const res = await queryNewsArea(2010, 2, 10, "");
  //   setNewsArr(res.rows);
  // };
  const tableFn = () => {
    window.sessionStorage.setItem("mc", mc);
    // history.push("/TablePage");
    props.queryMc(mc);
  };
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
          {/* <span className="title-en">{titleEn}</span> */}
        </div>
        <Link to="/TablePage">
          <div className="more" onClick={tableFn}>
            MORE
          </div>
        </Link>
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
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsArea);
