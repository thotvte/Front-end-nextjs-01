"use client";
import Image from "next/image";
import styles from "./user.module.css";
import React, { useState } from "react";
import type { CheckboxProps, DatePickerProps, RadioChangeEvent } from "antd";
import { Checkbox, DatePicker, Radio, Select, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";
const weekFormat = "MM/DD";
const monthFormat = "YYYY/MM";
import { Input, QRCode } from "antd";
import appstore from "../../../public/assets/imgs/appstore.png";
import googleplay from "../../../public/assets/imgs/googleplay.png";
import {
  EditOutlined,
  LeftOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

const checkBox: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const User = () => {
  const [value, setValue] = useState(1);

  const [checkOut, setCheckOut] = useState(false);

  const [edit, setEdit] = useState(false);

  const hanldEdit = (option: boolean) => {
    setEdit(option);
  };

  const hanldCheck = (option: boolean) => {
    setCheckOut(option);
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div style={{ backgroundColor: "#edf0f5" }}>
      <div className={styles.user}>
        <div className={styles.userTop}>
          <div className={styles.menuLeft}>
            <h2 className={styles.menuLeftName}>
              Chào Anh : <b className={styles.fullName}>Trương Văn Thọ</b>
            </h2>
            <ul>
              <li>
                <a
                  href="#!"
                  onClick={() => hanldCheck(true)}
                  className={checkOut ? styles.active : ""}
                >
                  Đơn hàng đã mua{" "}
                </a>
              </li>
              <li
                onClick={() => hanldCheck(false)}
                className={!checkOut ? styles.active : ""}
              >
                <a href="#!">Thông tin và sổ địa chỉ</a>
              </li>
            </ul>
            <a href="#!" className={styles.btnLogout}>
              Đăng xuất
            </a>
            <div className={styles.promote}>
              <span className={styles.userPoint}>
                Tổng điểm tích lũy: 0 điểm
              </span>
              <div className={styles.promoteBody}>
                <div>
                  <span className={styles.downloadTitle}>
                    Tải App LESSON Quà Tặng VIP
                  </span>
                  <p className={styles.promoteContent}>
                    Tích & sử dụng điểm cho khách hàng thân thiết. Sản phẩm của
                    tập đoàn MWG. <a href="#!">Tìm hiểu thêm</a>
                  </p>
                </div>
                <div className={styles.qr}>
                  <Space>
                    <QRCode
                      type="canvas"
                      value="https://www.facebook.com/tho.truongvan.2109/"
                      style={{ width: "80px", height: "100%" }}
                    />
                  </Space>
                </div>
              </div>
              <div className={styles.download}>
                <a href="#!">
                  {" "}
                  <Image
                    src={appstore}
                    alt={"APP Store"}
                    height={40}
                    width={190}
                  />
                </a>
                <a href="#!">
                  {" "}
                  <Image
                    src={googleplay}
                    alt={"Google Play"}
                    height={40}
                    width={190}
                  />
                </a>
              </div>
            </div>
          </div>
          {checkOut && (
            <div className={styles.menuRight}>
              <div className={styles.menuTop}>
                <h2>Đơn hàng đả mua</h2>

                <RangePicker
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    padding: "0",
                  }}
                  defaultValue={[
                    dayjs("2015/01/01", dateFormat),
                    dayjs("2015/01/01", dateFormat),
                  ]}
                  format={dateFormat}
                />
              </div>
              <div className={styles.filter}>
                <div className={styles.filterTypeScroll}>
                  <a href="#!">Tất cả</a>
                  <a href="#!">Chờ xử lý</a>
                  <a href="#!">Đã xác nhận</a>
                  <a href="#!">Đang chuyển hàng</a>
                  <a href="#!">Đang giao hàng</a>
                  <a href="#!">Đã hủy </a>
                  <a href="#!">Thành công</a>
                </div>
              </div>
              <div className={styles.listOrder}>
                <div className={styles.notfoundList}>
                  <ShoppingOutlined
                    style={{
                      fontSize: "80px",
                      color: "#94C4FC",
                      marginBottom: "10px",
                    }}
                  />
                  <p>Rất tiếc, không tìm thấy đơn hàng nào phù hợp</p>
                  <span>Vẫn còn rất nhiều sản phẩm đang chờ anh</span>
                  <div className={styles.groupButtonDirect}>
                    <p>
                      <a href="#!">Điện thoại</a>
                    </p>
                    <p>
                      <a href="#!">Laptop</a>
                    </p>
                    <p>
                      <a href="#!">Tablet</a>
                    </p>
                    <p>
                      <a href="#!">Phụ kiện</a>
                    </p>
                    <p>
                      <a href="#!">Smartwatch</a>
                    </p>
                  </div>
                  <a href="/" className={styles.home}>
                    <LeftOutlined /> Về trang chủ
                  </a>
                </div>
              </div>
            </div>
          )}
          {!checkOut && (
            <div className={styles.profile}>
              <h2>Thông tin tài khoản</h2>
              <div className={styles.profileArea}>
                <h3>Thông tin cá nhân</h3>
                <div className={styles.profileMain}>
                  <div className={styles.profileInfo}>
                    <p>
                      Anh <span id="username">Thọ Trương Văn</span> - 0932320642
                    </p>
                    <a href="#!" onClick={() => hanldEdit(true)}>
                      <EditOutlined />
                      <span>Sửa</span>
                    </a>
                  </div>
                  {edit && (
                    <div className={styles.profileInputGroup}>
                      <div>
                        <Radio.Group onChange={onChange} value={value}>
                          <Radio value={1}>Anh</Radio>
                          <Radio value={2}>Chị</Radio>
                        </Radio.Group>
                      </div>
                      <div className={styles.profileInput}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <span>Họ &amp; Tên: </span>
                          <Input
                            placeholder="NHẬP HỌ VÀ TÊN"
                            style={{ width: "200px" }}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <span>Số điện thoại: </span>
                          <Input
                            placeholder="0123456789"
                            style={{ width: "200px" }}
                          />
                        </div>
                      </div>
                      <div className={styles.btnProfileEdit}>
                        <a href="#!" onClick={() => hanldEdit(false)}>
                          Hủy
                        </a>
                        <a href="#!" style={{ color: "#F96F3A" }}>
                          Lưu
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.addressArea}>
                <h3>ĐỊA CHỈ NHẬN HÀNG</h3>
                <div>
                  <Input placeholder="Nhập địa chỉ nhận hàng" />
                </div>
                <div className={styles.checkDefault}>
                  <Checkbox onChange={checkBox}>Checkbox</Checkbox>
                </div>
                <a href="#!" className={styles.button}>
                  CẬP NHẬT
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default User;
