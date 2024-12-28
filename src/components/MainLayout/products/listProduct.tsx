import React from "react";
import Product from "./productItem";
import styles from "./product.module.css";
import Category from "../category/page";
import Banner from "../banner/page";
import { HeartOutlined } from "@ant-design/icons";
// Dữ liệu giả lập (bạn có thể thay thế bằng dữ liệu từ API)
const products = [
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
  },
];

const ListProduct: React.FC = () => {
  return (
    <div>
      <div className={styles.listproduct}>
        {products.map((product) => (
          <Product
            key={product.id} // Sử dụng id duy nhất cho key
            title={product.title}
            originalPrice={product.originalPrice}
            oldPrice={product.oldPrice}
            discount={product.discount}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
