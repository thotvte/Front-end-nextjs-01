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
import { Button, Dropdown, Input, MenuProps } from "antd";
import Link from "next/link";

const { Search } = Input;

const Header = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Sạc dự phòng
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Sạc, cáp
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Ốp lưng điện thoại
        </a>
      ),
    },
  ];

  const old: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Máy cũ giá rẻ
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Thu cũ đổi mới
        </a>
      ),
    },
  ];

  return (
    <div className="header fixed">
      <div className="main-content">
        <div className="body">
          <a href="/">
            <Image
              src={logo}
              alt="LOGO"
              width={150}
              height={70}
              style={{ cursor: "pointer" }}
            ></Image>
          </a>
          <nav className="nav">
            <ul>
              <li className={styles.search}>
                <Search
                  placeholder="Nhập tên điện thoại, máy tính, phụ kiện cần tìm "
                  onSearch={(value) => console.log(value)}
                />
              </li>
            </ul>
          </nav>

          <div className={styles.login}>
            <Link href="/auth/login" className={styles.signUpButton}>
              <LoginOutlined
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              Đăng nhập
            </Link>
            <Link href="#!" className={styles.signUpButton}>
              <ShoppingCartOutlined />
              Giỏ hàng
            </Link>
          </div>
        </div>
        <ul className={styles.mainMenu}>
          <li>
            <a href="">
              <i>
                <img
                  src="https://cdn.tgdd.vn/content/phonne-24x24.png"
                  alt=""
                />
              </i>
              <span>Điện thoại</span>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img
                  src="https://cdn.tgdd.vn/content/laptop-24x24.png"
                  alt=""
                />
              </i>
              <span>Laptop</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <Dropdown
                menu={{ items: items }}
                placement="bottomRight"
                arrow={{ pointAtCenter: true }}
              >
                <Button
                  style={{
                    border: "none",
                    background: "none",
                    boxShadow: "none",
                  }}
                >
                  <i>
                    <img
                      src="https://cdn.tgdd.vn/content/phu-kien-24x24.png"
                      alt=""
                    />
                  </i>
                  <span>Phụ kiện</span>
                </Button>
              </Dropdown>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img
                  src="https://cdn.tgdd.vn/content/smartwatch-24x24.png"
                  alt=""
                />
              </i>
              <span>Smartwatch</span>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img src="https://cdn.tgdd.vn/content/watch-24x24.png" alt="" />
              </i>
              <span>Đồng hồ</span>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img
                  src="https://cdn.tgdd.vn/content/tablet-24x24.png"
                  alt=""
                />
              </i>
              <span>Tablet</span>
            </a>
          </li>
          <li>
            <a href="">
              <Dropdown
                menu={{ items: old }}
                placement="bottomRight"
                arrow={{ pointAtCenter: true }}
              >
                <Button
                  style={{
                    border: "none",
                    background: "none",
                    boxShadow: "none",
                  }}
                >
                  <i>
                    <img
                      src="https://cdn.tgdd.vn/content/may-cu-24x24.png"
                      alt=""
                    />
                  </i>
                  <span>Máy cũ,Thu cũ</span>
                </Button>
              </Dropdown>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img src="https://cdn.tgdd.vn/content/PC-24x24.png" alt="" />
              </i>
              <span>PC, Máy in</span>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img src="https://cdn.tgdd.vn/content/sim-24x24.png" alt="" />
              </i>
              <span>Sim, Thẻ Cào</span>
            </a>
          </li>
          <li>
            <a href="">
              <i>
                <img
                  src="https://cdn.tgdd.vn/content/tien-ich-24x24.png"
                  alt=""
                />
              </i>
              <span>Dịch vụ tiện ích</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
