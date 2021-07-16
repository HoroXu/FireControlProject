import React, { useEffect } from "react";
import { Carousel } from "antd";
import Axios from "axios";
import "./index.less";

const CarouselCom = () => {
  return (
    <div className="carousel-area">
      <Carousel autoplay>
        <div className="img-item">111</div>
        <div className="img-item">222</div>
      </Carousel>
    </div>
  );
};

export default CarouselCom;
