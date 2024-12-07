"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import "../../../app/globals.css";
import logo from "../../../../public/assets/imgs/logo.svg";
import Icon, {
  LoginOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

const { Search } = Input;

const Header = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div className="header fixed">
      <div className="main-content">
        <div className="body">
          <a href="/">
            <Image
              src={logo}
              alt="LOGO"
              width={100}
              height={100}
              style={{ cursor: "pointer" }}
            ></Image>
          </a>
          <nav className="nav">
            <ul>
              <div>
                <li
                  style={{
                    display: "flex",
                    backgroundColor: "#EAEAEA",
                    textDecoration: "none",
                    textAlign: "center",
                    justifyItems: "center",
                    borderRadius: "15px",
                    marginRight: "40px",
                  }}
                >
                  <MenuOutlined style={{ paddingLeft: "15px" }} />
                  <a href="#!">Danh mục</a>
                </li>
              </div>

              <li className={styles.search}>
                <Search
                  placeholder="Nhập tên điện thoại, máy tính, phụ kiện cần tìm "
                  onSearch={(value) => console.log(value)}
                />
              </li>
            </ul>
          </nav>

          <div className={styles.login}>
            <a href="/auth/login">
              <LoginOutlined
                style={{
                  color: "#fff",
                  backgroundColor: "#7D161C",
                  opacity: hovered ? 0.9 : 1,
                  padding: "15px",
                  borderRadius: "50%",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </a>
            <a href="#!" className={styles.signUpButton}>
              <ShoppingCartOutlined type="shopping" />
              Giỏ hàng
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
