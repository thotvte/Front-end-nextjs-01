import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import slide1 from "../assets/imgs/slide1.jpg";
import slide2 from "../assets/imgs/slide2.jpg";
import slide3 from "../assets/imgs/slide3.jpg";
import slide4 from "../assets/imgs/slide4.jpg";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Carousels: React.FC = () => (
  <div className="main-content">
    <Carousel
      arrows
      dotPosition="left"
      infinite={false}
      autoplay
      autoplaySpeed={2500}
      style={{
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      <div>
        <Image src={slide1} alt={""} height={160} width={1170}></Image>
      </div>
      <div>
        <Image src={slide2} alt={""} height={160} width={1170}></Image>
      </div>
      <div>
        <Image src={slide3} alt={""} height={160} width={1170}></Image>
      </div>
      <div>
        <Image src={slide4} alt={""} height={160} width={1170}></Image>
      </div>
    </Carousel>
  </div>
);

export default Carousels;
