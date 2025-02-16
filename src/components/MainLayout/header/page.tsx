"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import axios from "axios";
import "../../../app/globals.css";
import logo from "../../../../public/assets/imgs/logo.svg";
import Icon, {
  DownOutlined,
  LoginOutlined,
  LogoutOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Input, MenuProps } from "antd";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

interface Category {
  _id: string;
  name: string;
}

interface ApiResponse {
  statusCode: number;
  message: string;
  data: {
    meta: {
      current: number;
      pageSize: number;
      pages: number;
      total: number;
    };
    results: Category[];
  };
}

const { Search } = Input;

const Header = (props: any) => {
  const { data: session, status } = useSession();
  const [categories, setCategories] = useState<Category[]>([]);
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
            {status === "authenticated" ? (
              session.user.role === "ADMIN" ? (
                <Link href="/dashboard">
                  <span className={styles.signUpButton}>
                    <UserOutlined />
                    {session.user.name}
                  </span>
                </Link>
              ) : session.user.role === "USER" ? (
                <Link href="/user">
                  <span className={styles.signUpButton}>
                    <UserOutlined />
                    {session.user.name}
                  </span>
                </Link>
              ) : null
            ) : (
              <Link href="/auth/login" className={styles.signUpButton}>
                <LoginOutlined
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                Đăng nhập
              </Link>
            )}

            <Link href="/cart" className={styles.signUpButton}>
              <ShoppingCartOutlined />
              Giỏ hàng
            </Link>
          </div>
        </div>
        <ul className={styles.mainMenu}>
          <li className={styles.menuItem}>
            <a href="/sanpham/dienthoai">
              <i>
                <Image
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
            <a href="/sanpham/laptop">
              <i>
                <Image
                  src="/assets/icons/laptop.png"
                  alt=""
                  height={24}
                  width={24}
                />
              </i>
              <span>Laptop</span>
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/sanpham/phukien">
              <i>
                <Image
                  src="/assets/icons/phukien.png"
                  alt=""
                  height={24}
                  width={24}
                />
              </i>
              <span>Phụ kiện</span>
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/sanpham/smartwatch">
              <i>
                <Image
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
            <a href="/sanpham/dongho">
              <Image
                src="/assets/icons/watch.png"
                alt=""
                height={24}
                width={24}
              />
              <span>Đồng hồ</span>
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/sanpham/tablet">
              <i>
                <Image
                  src="/assets/icons/tablet.png"
                  alt=""
                  height={24}
                  width={24}
                />
              </i>
              <span>Tablet</span>
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/sanpham/tcdm">
              <i>
                <Image
                  src="/assets/icons/maycu.png"
                  alt=""
                  height={24}
                  width={24}
                />
              </i>
              <span>Máy cũ,Thu cũ</span>
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/sanpham/pc">
              <i>
                <Image
                  src="/assets/icons/PC.png"
                  alt=""
                  height={24}
                  width={24}
                />
              </i>
              <span>PC, Máy in</span>
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/sanpham/sim">
              <i>
                <Image
                  src="/assets/icons/sim.png"
                  alt=""
                  height={24}
                  width={24}
                />
              </i>
              <span>Sim, Thẻ Cào</span>
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/sanpham/dvti">
              <i>
                <Image
                  src="/assets/icons/tienich.png"
                  alt=""
                  height={24}
                  width={24}
                />
              </i>
              <span>Dịch vụ tiện ích</span>
            </a>
          </li>
        </ul>
        {/* <ul className={styles.mainMenu}>
          {categories.map((category) => (
            <li key={category._id} className={styles.menuItem}>
              <a href={`/categories/${category._id}`}>
                <span>{category.name}</span>
              </a>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Header;
