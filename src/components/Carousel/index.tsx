import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import { queryLogo } from "../../services/index";
import "./index.less";

const CarouselCom = () => {
  const [imgArr, setImgArr] = useState([]);
  const queryLogoFn = async () => {
    const res = await queryLogo(3);
    setImgArr(res);
  };

  useEffect(() => {
    queryLogoFn();
  }, []);
  return (
    <div className="carousel-area">
      <Carousel autoplay>
        {imgArr.map((item: any) => {
          return (
            <div className="img-item">
              <img src={item.bannerUrl} />
            </div>
          );
        })}

        {/* <div className="img-item">222</div> */}
      </Carousel>
    </div>
  );
};

export default CarouselCom;
