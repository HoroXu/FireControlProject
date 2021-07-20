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
const Home = () => {
  const [contactState, setContactState] = useState<any>({});
  const [aboutUsInfo, setAboutUsInfo] = useState([]);
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
  useEffect(() => {
    async function fetchInfo() {
      const aboutUsInfoTemp = await queryNewsAreaFn(2011, 10, 1);
      const corporateNewsInfoTemp = await queryNewsAreaFn(2010, 10, 1);
      const industryNewsInfotemp = await queryEngineeringCaseFn(2021, 10, 1);
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
      <Logo />
      <Header />
      <CarouselCom />
      <div className="news-container">
        <NewsArea titleZh="关于我们" titleEn="Company news" data={aboutUsInfo}/>
        <NewsArea titleZh="企业新闻" titleEn="Company news" data={corporateNewsInfo}/>
        <NewsArea titleZh="行业新闻" titleEn="Company news" data={industryNewsInfo}/>
      </div>
      <EngineeringCase />
      <CompanyInfo setContactState={setContactState} />
      <Links />
      <Bottom contactState={contactState} />
    </div>
  );
};

export default Home;
