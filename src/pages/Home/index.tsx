import React, { useState, useEffect } from "react";
import "./index.less";
import Header from "../../components/Header";
import CarouselCom from "../../components/Carousel";
import NewsArea from "../../pages/Home/NewsArea";
// import caseImg from "@/assets/images/caseImg.png";
import CompanyInfo from "../../components/CompanyInfo";
import Links from "../../components/Links";
import Bottom from "../../components/Bottom";
import Logo from "../../components/Logo";
import EngineeringCase from "./EngineeringCase/index";
import { queryNewsArea, queryEngineeringCase } from "../../services/index";
import News from "@/assets/images/news.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [contactState, setContactState] = useState<any>({});
  const [aboutUsInfo, setAboutUsInfo] = useState<any>([]);
  const [corporateNewsInfo, setCorporateNewsInfo] = useState([]);
  const [industryNewsInfo, setIndustryNewsInfo] = useState([]);
  const queryNewsAreaFn = async (
    mc: number,
    pageNum: number,
    pageSize: number
  ) => {
    const res = await queryNewsArea(mc, pageNum, pageSize);
    return res;
  };

  const queryEngineeringCaseFn = async (
    itemCode: number,
    pageNum: number,
    pageSize: number
  ) => {
    const res = await queryEngineeringCase(itemCode, pageNum, pageSize);
    return res;
  };

  const goDetailFn = (id: any, item: string) => {
    window.sessionStorage.setItem("docId", id);
    window.sessionStorage.setItem("detailItem", item);
  };
  useEffect(() => {
    async function fetchInfo() {
      const aboutUsInfoTemp = await queryNewsAreaFn(2011, 1, 10);
      const corporateNewsInfoTemp = await queryNewsAreaFn(2010, 1, 10);
      const industryNewsInfotemp = await queryNewsAreaFn(2001, 1, 10);
      setAboutUsInfo(aboutUsInfoTemp.rows);
      setCorporateNewsInfo(corporateNewsInfoTemp.rows);
      setIndustryNewsInfo(industryNewsInfotemp.rows);
      // console.log(
      //   aboutUsInfoTemp,
      //   corporateNewsInfoTemp,
      //   industryNewsInfotemp,
      //   "======"
      // );
    }
    fetchInfo();

    // queryNewsAreaFn(2011, 10, 1);
  }, []);
  return (
    <div className="home-area">
      {/* <Logo />
      <Header />
      <CarouselCom /> */}
      <div className="news-container">
        {/* <NewsArea titleZh="关于我们"  data={aboutUsInfo}/> */}

        <div className="news-area">
          <section className="news-title">
            <div className="title-left">
              <img src={News} className="title-img" />
              <span className="title-zh">关于我们</span>
              {/* <span className="title-en">{titleEn}</span> */}
            </div>
            <Link to="/DetailPage">
              <div
                className="more"
                onClick={() => goDetailFn(aboutUsInfo[0].id, "关于我们")}
              >
                MORE
              </div>
            </Link>
          </section>
          <section className="news-items">
            <div className="single-item">
              {/* <div className="item-title">公司简介</div> */}
              {aboutUsInfo[0] && (
                <div
                  className="item-content-about"
                  dangerouslySetInnerHTML={{
                    __html: aboutUsInfo[0].subTitle,
                  }}
                ></div>
              )}
            </div>
          </section>
        </div>
        <NewsArea titleZh="企业新闻" data={corporateNewsInfo} mc={2010} />
        <NewsArea titleZh="行业新闻" data={industryNewsInfo} mc={2001} />
      </div>
      <EngineeringCase />
      {/* <CompanyInfo setContactState={setContactState} />
      <Links />
      <Bottom contactState={contactState} /> */}
    </div>
  );
};

export default Home;
