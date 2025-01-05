"use client";

import React from "react";
import { Tabs, List, Card, Button, Typography } from "antd";
import {
  AndroidOutlined,
  AppleOutlined,
  AuditOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import styles from "./user.module.css";

const { Title } = Typography;

const App: React.FC = () => {
  // Mẫu dữ liệu cho đơn hàng đã mua
  const orders = [
    {
      id: 1,
      product: "Điện thoại iPhone 13",
      price: "20.000.000 VND",
      date: "2025-01-01",
    },
    {
      id: 2,
      product: "Laptop MacBook Pro",
      price: "40.000.000 VND",
      date: "2025-01-02",
    },
    {
      id: 3,
      product: "Smartwatch Apple Watch",
      price: "8.000.000 VND",
      date: "2025-01-03",
    },
  ];

  const userInfo = {
    name: "Nguyễn Văn A",
    email: "nguyen@example.com",
    address: "123 Đường ABC, TP.HCM",
    phone: "0123456789",
  };

  return (
    <div className={styles.container}>
      <Tabs defaultActiveKey="1" className={styles.tabs}>
        {/* Tab "Đơn hàng đã mua" */}

        <Tabs.TabPane
          tab={
            <span style={{ display: "flex", gap: "5px", marginLeft: "10px" }}>
              <AuditOutlined />
              Thông tin và số địa chỉ
            </span>
          }
          key="1"
        >
          <div className={styles.tabContent}>
            <Card className={styles.card}>
              <div className={styles.infoContainer}>
                <h2>THÔNG TIN CÁ NHÂN</h2>
                <p>
                  <strong>Tên:</strong> {userInfo.name}
                </p>
                <p>
                  <strong>Email:</strong> {userInfo.email}
                </p>
                <p>
                  <strong>Số điện thoại:</strong> {userInfo.phone}
                </p>
                <p>
                  <strong>Địa chỉ:</strong> {userInfo.address}
                </p>
                <Button type="primary" className={styles.editButton}>
                  Chỉnh sửa thông tin
                </Button>
              </div>
            </Card>
          </div>
        </Tabs.TabPane>

        <Tabs.TabPane
          tab={
            <span style={{ display: "flex", gap: "5px", marginLeft: "10px" }}>
              <InboxOutlined />
              Đơn hàng đã mua
            </span>
          }
          key="2"
        >
          <div className={styles.tabContent}>
            <List
              itemLayout="vertical"
              size="large"
              dataSource={orders}
              renderItem={(order) => (
                <List.Item
                  key={order.id}
                  extra={
                    <img
                      width={100}
                      alt="product"
                      src="https://via.placeholder.com/150"
                      className={styles.orderImage}
                    />
                  }
                >
                  <List.Item.Meta
                    title={order.product}
                    description={`Giá: ${order.price} | Ngày mua: ${order.date}`}
                  />
                </List.Item>
              )}
            />
          </div>
        </Tabs.TabPane>
      </Tabs>
      <Button
        type="primary"
        style={{
          color: "blue",
          backgroundColor: "#fff",
          border: "1px solid blue",
          padding: "20px ",
          marginTop: "30px",
          width: "100%",
        }}
      >
        Đăng xuất
      </Button>
    </div>
  );
};

export default App;
