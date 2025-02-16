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
  id: string;
  category: string;
}

const ProductItem = ({
  title,
  originalPrice,
  oldPrice,
  discount,
  image,
  id,
  category,
}: ProductProps) => {
  return (
    <div className={styles.product}>
      {/* <Link href={"/info/productinfo"}> */}
      <Link href={`/info/productinfo/${id}`}>
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
      </Link>

      {/* <Link href={"/info/productinfo"}> */}
      <Link href={`/info/productinfo/${id}`}>
        <h3 className={styles.producttitle}>{title}</h3>
      </Link>

      {/* <Link href={"/info/productinfo"}> */}
      <Link href={`/info/productinfo/${id}`}>
        <strong className={styles.originalprice}>{originalPrice}</strong>
      </Link>

      {/* <Link href={"/info/productinfo"}> */}
      <Link href={`/info/productinfo/${id}`}>
        <div>
          {discount > 0 && (
            <strong className={styles.oldprice}>{oldPrice}</strong>
          )}

          {discount > 0 && (
            <strong className={styles.discount}>-{discount}%</strong>
          )}
        </div>
      </Link>

      <Link href={"/cart"}>
        <p className={styles.btn}>Mua ngay</p>
      </Link>
      <p style={{ display: "none" }}>{category}</p>
    </div>
  );
};

export default ProductItem;
