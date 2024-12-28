import React from "react";
import Icon from "@ant-design/icons";
import Image from "next/image";
import "../../../app/globals.css";
import styles from "../products/product.module.css";
import Link from "next/link";

interface ProductProps {
  title: string;
  originalPrice: string;
  oldPrice: string;
  discount: number;
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

      <Link href={"/info/productinfo"}>
        <h3 className={styles.producttitle}>{title}</h3>
      </Link>

      <Link href={"/info/productinfo"}>
        <strong className={styles.originalprice}>{originalPrice}</strong>
      </Link>

      <Link href={"/info/productinfo"}>
        <div>
          <strong className={styles.oldprice}>{oldPrice}</strong>
          <strong className={styles.discount}>-{discount}%</strong>
        </div>
      </Link>

      <p className={styles.btn}>Mua ngay</p>
    </div>
  );
};

export default ProductItem;
