import styles from "../products/product.module.css";
import React from "react";
import Category from "../category/page";
import ExpandMore from "@/components/MainLayout/expandMore/page";
const Product = () => {
  return (
    <div
      className="main-content"
      style={{
        maxHeight: "890px",
        backgroundColor: "#FFFFFF",
        borderRadius: "15px",
        marginTop: "20px",
        marginBottom: "20px",
        overflow: "hidden",
      }}
    >
      <Category />
      <ExpandMore />
    </div>
  );
};
export default Product;
