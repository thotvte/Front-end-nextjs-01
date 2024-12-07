// MainContent.tsx
import React from "react";
import { HeartOutlined } from "@ant-design/icons";
import OfferImage from "./OfferImage";
import styles from "../products/product.module.css";
import ExpandMore from "../expandMore/page";

const offerImages = [
  { src: "/assets/imgs/uudai1.png", alt: "Gian hàng ưu đãi 1" },
  { src: "/assets/imgs/uudai2.png", alt: "Gian hàng ưu đãi 2" },
  { src: "/assets/imgs/uudai3.png", alt: "Gian hàng ưu đãi 3" },
  { src: "/assets/imgs/uudai4.png", alt: "Gian hàng ưu đãi 4" },
];

const Endow: React.FC = () => {
  return (
    <div className="main-content" style={{ marginTop: "15px" }}>
      <p
        style={{
          marginBottom: "15px",
          fontSize: "2.2rem",
          fontWeight: "500",
          color: "Black",
        }}
      >
        <HeartOutlined style={{ color: "red" }} /> Gian hàng ưu đãi
      </p>
      <div style={{ display: "flex", gap: "10px" }}>
        {offerImages.map((image, index) => (
          <OfferImage key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default Endow;
