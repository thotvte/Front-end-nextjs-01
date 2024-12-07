import React from "react";
import Icon, { DollarOutlined } from "@ant-design/icons";
import Image from "next/image";
import "../../../app/globals.css";
import styles from "../products/product.module.css";

interface ProductProps {
  title: string;
  originalPrice: string;
  oldPrice: string;
  discount: number; // discount là kiểu số (number)
  image: string;
}

const ProductItem = ({
  title,
  originalPrice,
  oldPrice,
  discount,
  image,
}: ProductProps) => {
  return (
    <div className={styles.product}>
      <Image
        src={image}
        alt="product"
        width={168}
        height={154}
        style={{
          cursor: "pointer",
          margin: "5px 1px",
          borderRadius: "5px",
        }}
      />
      <h3 className={styles.producttitle}>{title}</h3>
      <strong className={styles.originalprice}>
        {originalPrice} <DollarOutlined />
      </strong>
      <div>
        <strong className={styles.oldprice}>
          {oldPrice} <DollarOutlined />
        </strong>
        <strong className={styles.discount}>-{discount}%</strong>
      </div>
      <p className={styles.btn}>Mua ngay</p>
    </div>
  );
};

export default ProductItem;
