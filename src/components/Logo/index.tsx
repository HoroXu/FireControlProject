import React, { useState, useEffect } from "react";
import "./index.less";
import { queryLogo } from "../../services/index";

const Logo = () => {
  const [logoInfo, setLogoInfo] = useState([]);
  const queryLogoFn = async () => {
    const res = await queryLogo();
    setLogoInfo(res);
  };
  useEffect(() => {
    queryLogoFn();
  }, []);
  return (
    <div className="logo-container">
      <img />
    </div>
  );
};

export default Logo;
