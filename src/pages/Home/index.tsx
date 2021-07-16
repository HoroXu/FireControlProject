import React from "react";
import "./index.less";
import Header from "@/components/Header";
import CarouselCom from "@/components/Carousel";
import NewsArea from "@/pages/Home/NewsArea";
import caseImg from "@/assets/images/caseImg.png";
import CompanyInfo from "@/components/CompanyInfo";
import Links from "@/components/Links";
import Bottom from "@/components/Bottom";

const Home = () => {
  const imgArr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="home-area">
      <Header />
      <CarouselCom />
      <div className="news-container">
        <NewsArea titleZh="公司新闻" titleEn="Company news" />
        <NewsArea titleZh="公司新闻" titleEn="Company news" />
        <NewsArea titleZh="公司新闻" titleEn="Company news" />
      </div>
      <div className="engineering-case">
        <div className="case-title">
          <div>
            <span className="case-icon"></span>
            <span className="case-text">工程案例</span>
          </div>
          <span>MORE</span>
        </div>
        <div className="case-container">
          {imgArr.map((index) => {
            return (
              <div
                className={
                  index > 3 ? "case-content content-margin" : "case-content"
                }
              >
                <img src={caseImg} className="case-img" />
                <div className="content-title">正洪大厦地下停车场</div>
                <div className="content-num">编号：797490709173901</div>
              </div>
            );
          })}
        </div>
      </div>
      <CompanyInfo />
      <Links />
      <Bottom />
    </div>
  );
};

export default Home;
