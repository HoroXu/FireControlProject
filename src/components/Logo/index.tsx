import React, { useState, useEffect } from "react";
import "./index.less";
import { queryLogo } from "../../services/index";

const Logo = () => {
  // const [logoInfo, setLogoInfo] = useState([]);
  const [logoImg, setlogoImg] = useState("");
  // const [bgImg, setBgImg] = useState("");
  const queryLogoFn = async () => {
    const res = await queryLogo();
    // const logoUrl = res.filter((item: any) => {
    //   return item.bannerType === "1";
    // })[0].bannerUrl;
    const bgUrl = res.filter((item: any) => {
      return item.bannerType === "2";
    })[0].bannerUrl;
    // setlogoImg(logoUrl);
    console.log(bgUrl, "logoUrl====");
    setlogoImg(bgUrl);
  };
  useEffect(() => {
    queryLogoFn();
  }, []);
  return (
    <div className="logo-container">
      <img className="logo-img" src={logoImg} />
    </div>
  );
};

export default Logo;
