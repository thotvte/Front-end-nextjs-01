import styles from "../products/product.module.css";
import React from "react";
import Category from "../category/page";
import Banner from "../banner/page";
import ListProduct from "./listProduct";
import { HeartOutlined } from "@ant-design/icons";
import ExpandMore from "@/components/MainLayout/expandMore/page";
const Product = () => {
  return (
    <div
      className="main-content"
      style={{
        height: "950px",
        backgroundColor: "#FFFFFF",
        borderRadius: "15px",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <Category />
      {/* Banner Hot */}
      <Banner />
      <ListProduct />
      <ExpandMore />
    </div>
  );
};
export default Product;
