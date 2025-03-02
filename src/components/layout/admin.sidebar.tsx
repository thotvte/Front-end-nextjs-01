"use client";
import Layout from "antd/es/layout";
import Menu from "antd/es/menu";
import {
  AppstoreOutlined,
  CommentOutlined,
  DollarOutlined,
  MailOutlined,
  SettingOutlined,
  ShoppingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import React, { useContext } from "react";
import { AdminContext } from "@/library/admin.context";
import type { MenuProps } from "antd";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];
const AdminSideBar = () => {
  const { Sider } = Layout;
  const { collapseMenu } = useContext(AdminContext)!;

  const items: MenuItem[] = [
    {
      key: "grp",
      label: "THO DEP TRAI",
      type: "group",
      children: [
        {
          key: "dashboard",
          label: <Link href={"/dashboard"}>Quản lý Sản phẩm</Link>,
          icon: <AppstoreOutlined />,
        },
        {
          key: " category",
          label: <Link href={"/dashboard/category"}>Quản lý Danh mục</Link>,
          icon: <AppstoreOutlined />,
        },
        {
          key: "companies",
          label: <Link href={"/dashboard/company"}>Quản lý Company</Link>,
          icon: <AppstoreOutlined />,
        },
        {
          key: "users",
          label: <Link href={"/dashboard/user"}>Quản lý người dùng</Link>,
          icon: <TeamOutlined />,
        },
        {
          key: "comment",
          label: <Link href={"/dashboard/comment"}>Thống kê nhận xét</Link>,
          icon: <CommentOutlined />,
        },
        {
          key: "Order",
          label: <Link href={"/dashboard/order"}>Quản lý đơn hàng</Link>,
          icon: <ShoppingOutlined />,
        },
        {
          key: "revenue",
          label: <Link href={"/dashboard/revenue"}>Thống kê doanh thu</Link>,
          icon: <DollarOutlined />,
        },
      ],
    },
  ];

  return (
    <Sider collapsed={collapseMenu}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        items={items}
        style={{ height: "100vh" }}
      />
    </Sider>
  );
};

export default AdminSideBar;
