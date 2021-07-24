import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import CarouselCom from "../../components/Carousel";
import Links from "../../components/Links";
import Bottom from "../../components/Bottom/";
import { queryDetail } from "../../services/index";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import "./index.less";

const DetailPage: React.FC = () => {
  const [detailContent, setDetailContent] = useState("");
  const queryDetailFn = async (docId: any) => {
    const res = await queryDetail(docId);
    console.log(res);
    setDetailContent(res.content);
  };

  useEffect(() => {
    const docId = window.sessionStorage.getItem("docId");
    queryDetailFn(docId);
  }, []);
  return (
    <div className="detail-page">
      {/* <Logo />
      <Header />
      <CarouselCom /> */}
      {/* <div className="bread-area">
        <Breadcrumb>
          <Link to="/">
            <Breadcrumb.Item>首页</Breadcrumb.Item>
          </Link>
          <Breadcrumb.Item>
            {window.sessionStorage.getItem("detailItem")}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div> */}
      <div
      className='detail-content-area'
        dangerouslySetInnerHTML={{
          __html: detailContent,
        }}
      ></div>
      {/* <Links /> */}
      {/* <Bottom /> */}
    </div>
  );
};

export default DetailPage;
