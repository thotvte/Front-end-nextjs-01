import React from "react";
import styles from "../cart.module.css";
import Header from "@/components/MainLayout/header/page";
import { ShoppingOutlined } from "@ant-design/icons";

const EmptyCartPage = () => {
  return (
    <>
      {/* <Header /> */}
      <div className={styles.emptycart}>
        <div className={styles.cartEmpty}>
          <ShoppingOutlined style={{ color: "blue", fontSize: "150px" }} />
          <h1>Giỏ hàng trống</h1>
          <span className={styles.span}>Không có sản phẩm trong giỏ hàng</span>
          <a href="/" className={styles.a}>
            Về trang chủ
          </a>
          <p className={styles.contact}>
            Khi cần trợ giúp vui lòng gọi <a href="#!">1900 232 460</a> hoặc{" "}
            <a href="#!">028.3622.1060</a> (8h00 - 21h30)
          </p>
        </div>
      </div>
    </>
  );
};

export default EmptyCartPage;
