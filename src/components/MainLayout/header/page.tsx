"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import "../../../app/globals.css";
import logo from "../../../../public/assets/imgs/logo.svg";
import Icon, {
  DownOutlined,
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
  const pc: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Máy tính để bàn
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
          Màn hình máy tính
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Máy chơi game
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Mực in
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Máy in
        </a>
      ),
    },
  ];
  const sim: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Sim, Thẻ cào
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
          eSim du lịch
        </a>
      ),
    },
  ];
  const dvti: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Đóng tiền tra góp
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
          Vay tiền mặt
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Mua gói Data 3G, 4G
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Thẻ cào điện thoại
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Mua gói truyền hình
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
          <li className={styles.menuItem}>
            <a href="">
              <i>
                <img
                  src="/assets/icons/phone.png"
                  alt=""
                  height={24}
                  width={24}
                />
              </i>
              <span>Điện thoại</span>
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="">
              <i>
                <img
                  src="/assets/icons/laptop.png"
                  alt=""
                  height={24}
                  width={24}
                />
              </i>
              <span>Laptop</span>
            </a>
          </li>
          <li className={styles.menuItems}>
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
                      src="/assets/icons/phukien.png"
                      alt=""
                      height={24}
                      width={24}
                    />
                  </i>
                  <span>
                    Phụ kiện <DownOutlined style={{ fontSize: "10px" }} />
                  </span>
                </Button>
              </Dropdown>
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="">
              <i>
                <img
                  src="/assets/icons/smartwatch.png"
                  alt=""
                  height={24}
                  width={24}
                />
              </i>
              <span>Smartwatch</span>
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="">
              <img
                src="/assets/icons/watch.png"
                alt=""
                height={24}
                width={24}
              />
              <span>Đồng hồ</span>
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="">
              <i>
                <img
                  src="/assets/icons/tablet.png"
                  alt=""
                  height={24}
                  width={24}
                />
              </i>
              <span>Tablet</span>
            </a>
          </li>
          <li className={styles.menuItems}>
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
                      src="/assets/icons/maycu.png"
                      alt=""
                      height={24}
                      width={24}
                    />
                  </i>
                  <span>
                    Máy cũ,Thu cũ <DownOutlined style={{ fontSize: "10px" }} />
                  </span>
                </Button>
              </Dropdown>
            </a>
          </li>
          <li className={styles.menuItems}>
            <a href="">
              <Dropdown
                menu={{ items: pc }}
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
                      src="/assets/icons/PC.png"
                      alt=""
                      height={24}
                      width={24}
                    />
                  </i>
                  <span>
                    PC, Máy in <DownOutlined style={{ fontSize: "10px" }} />
                  </span>
                </Button>
              </Dropdown>
            </a>
          </li>
          <li className={styles.menuItems}>
            <a href="">
              <Dropdown
                menu={{ items: sim }}
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
                      src="/assets/icons/sim.png"
                      alt=""
                      height={24}
                      width={24}
                    />
                  </i>
                  <span>
                    Sim, Thẻ Cào <DownOutlined style={{ fontSize: "10px" }} />
                  </span>
                </Button>
              </Dropdown>
            </a>
          </li>
          <li className={styles.menuItems}>
            <a href="">
              <Dropdown
                menu={{ items: dvti }}
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
                      src="/assets/icons/tienich.png"
                      alt=""
                      height={24}
                      width={24}
                    />
                  </i>
                  <span>
                    Dịch vụ tiện ích{" "}
                    <DownOutlined style={{ fontSize: "10px" }} />
                  </span>
                </Button>
              </Dropdown>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
