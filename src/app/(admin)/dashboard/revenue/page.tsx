"use client";
import React from "react";
import type { StatisticProps } from "antd";
import { Col, Row, Statistic } from "antd";
import CountUp from "react-countup";

// Formatter với đơn vị VNĐ
const formatter: StatisticProps["formatter"] = (value) => (
  <CountUp end={value as number} separator="," suffix=" VNĐ" />
);

const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={113} />
    </Col>
    <Col span={12}>
      <Statistic
        title="Tổng Doanh Thu tháng này"
        value={112893000}
        precision={2}
        formatter={formatter}
      />
    </Col>
  </Row>
);

export default App;
