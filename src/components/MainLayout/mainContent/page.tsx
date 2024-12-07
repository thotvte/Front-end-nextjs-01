"use client";
import { HeartOutlined, StarOutlined } from "@ant-design/icons";
import styles from "../../MainLayout/products/product.module.css";
import Carousels from "@/components/carousel/page";
import News from "../newCard/page";
import Endow from "../endow/page";
import Trademark from "../trademark/page";
import ListProduct from "../products/listProduct";
import Product from "../products/page";
import ExpandMore from "@/components/MainLayout/expandMore/page";

const MainContent = () => {
  return (
    <div>
      <Product />
      <Carousels />

      {/* Tuần lễ thương hiệu Laptop HP */}
      <Trademark />
      {/* Gian hàng ưu đãi */}
      <Endow />
      {/* Tin Tuc*/}
      <News />
    </div>
  );
};

export default MainContent;
