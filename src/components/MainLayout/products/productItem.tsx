import React, { useEffect, useState } from "react";
import Icon from "@ant-design/icons";
import Image from "next/image";
import "../../../app/globals.css";
import styles from "../products/product.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import axios from "axios";

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
  const [loading, setLoading] = useState<boolean>(false);
  const { data: session, status } = useSession();
  const handleAddCart = async () => {
    if (!session?.user?.access_token) {
      console.error("Không có token, yêu cầu không thể thực hiện.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/carts`,
        {
          products: [{ productId: id, quantity: 1 }],
        },
        {
          headers: {
            Authorization: `Bearer ${session.user.access_token}`,
          },
        }
      );

      console.log("Sản phẩm đã được thêm vào giỏ hàng:", response.data);
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
    }
  };

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
        <p className={styles.btn} onClick={handleAddCart}>
          Mua ngay
        </p>
      </Link>
      <p style={{ display: "none" }}>{category}</p>
    </div>
  );
};

export default ProductItem;
