"use client";
import Policy from "./policy";
import Rating from "./Rating";
import Specifications from "./specifications";

import style from "./styles.module.css";
const ProductInfoLeft: React.FC = () => {
  return (
    <div>
      <div
        style={{
          height: "450px",
          width: "690px",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
        }}
      ></div>
      <Policy />
      <Specifications />
      <Rating />
    </div>
  );
};

export default ProductInfoLeft;
