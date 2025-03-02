"use client";
import Image from "next/image";
import styles from "./user.module.css";
import React, { useEffect, useState } from "react";
import type { CheckboxProps, DatePickerProps, RadioChangeEvent } from "antd";
import { Checkbox, DatePicker, notification, Radio, Select, Space } from "antd";
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
import { getSession, signOut, useSession } from "next-auth/react";
import {
  EditOutlined,
  LeftOutlined,
  ProfileOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import axios from "axios";

interface Product {
  productId: {
    _id: string;
    name: string;
    price: number;
    stockQuantity: number;
    image: string[];
    color: string;
    category: string;
    company: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  quantity: number;
  price: number;
  _id: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: string;
  accountType: string;
  isActive: boolean;
  codeId: string;
  codeExpired: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Order {
  _id: string;
  user: User;
  products: Product[];
  totalAmount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ApiResponseOrder {
  statusCode: number;
  message: string;
  data: Order[];
}

const checkBox: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

interface User {
  name: string;
  phone: string;
  address: string;
}

interface ApiResponse {
  statusCode: number;
  message: string;
  data: User;
}

const User = () => {
  const { data: session, status } = useSession();

  const [name, setName] = useState(session?.user.name);
  const [phone, setPhone] = useState(session?.user.phone);
  const [address, setAddress] = useState(session?.user.address);
  const [order, setOrder] = useState<Order[]>([]);

  const [cancel, setCancel] = useState<Record<string, boolean>>({});

  const handleSelectCancel = (id: string) => {
    setCancel((prev) => ({
      ...prev,
      [id]: true,
    }));
    console.log(id);
  };

  const handleCancel = (id: string) => {
    setCancel((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  const [user, setUser] = useState<User>();

  const formatCurrency = (price: any) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const token = session?.user?.access_token;

        if (!token) {
          console.error("Không có token, yêu cầu không thể thực hiện.");
          return;
        }
        {
          const response = await axios.get<ApiResponse>(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/${session.user._id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUser(response.data.data);
        }
      } catch (error) {
        console.error("Lỗi khi lấy Cart:", error);
      } finally {
      }
    };
    fetchCarts();
  }, [session]);

  const fetchOrder = async () => {
    try {
      const token = session?.user?.access_token;
      if (!token) {
        console.error("Không có token, yêu cầu không thể thực hiện.");
        return;
      }

      const response = await axios.get<ApiResponseOrder>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/orders/${session.user._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrder(response.data.data);
      console.log(order);
    } catch (error) {
      console.error("Lỗi khi lấy sản phẩm:", error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [session]);

  const hanldEditUsers = async () => {
    if (!session?.user?.access_token) {
      console.error("Không có token, yêu cầu không thể thực hiện.");
      return;
    }
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users`,
        {
          name: name,
          phone: phone,
          address: address,
        },
        {
          headers: {
            Authorization: `Bearer ${session.user.access_token}`,
          },
        }
      );
      notification.success({
        message: "Cập nhật thành công!",
        description: `Đã cập nhật thành công thông tin của bạn.`,
        placement: "bottomRight", // Vị trí của thông báo
      });
      window.location.reload();
      console.log("Đả cập nhật thành công");
    } catch (error) {
      console.error("Lỗi khi Cập nhật", error);
    }
  };

  const hanldCancelOrder = async (id: string) => {
    if (!session?.user?.access_token) {
      console.error("Không có token, yêu cầu không thể thực hiện.");
      return;
    }
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/orders/${id}`,
        {
          status: "BỊ HỦY BỎ",
        },
        {
          headers: {
            Authorization: `Bearer ${session.user.access_token}`,
          },
        }
      );
      notification.success({
        message: "Hủy đơn hàng thành công!",
        description: `Đã hủy đơn hàng thành công thông tin của bạn.`,
        placement: "bottomRight", // Vị trí của thông báo
      });
      // window.location.reload();
      fetchOrder();
      console.log("Đả cập nhật thành công");
    } catch (error) {
      console.error("Lỗi khi Cập nhật", error);
    }
  };

  const hanldEditName = (e: any) => {
    setName(e.target.value);
  };

  const hanldEditPhone = (e: any) => {
    setPhone(e.target.value);
  };

  const hanldEditAddress = (e: any) => {
    setAddress(e.target.value);
  };

  const [value, setValue] = useState(1);

  const [checkOut, setCheckOut] = useState(false);

  const [edit, setEdit] = useState(false);

  const [editAddress, setEditAddress] = useState(false);

  const hanldEdit = (option: boolean) => {
    setEdit(option);
  };

  const handEditAddress = (option: boolean) => {
    setEditAddress(option);
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
              Chào Anh : <b className={styles.fullName}>{user?.name}</b>
            </h2>
            <ul>
              <li>
                <a
                  href="#!"
                  onClick={() => hanldCheck(true)}
                  className={checkOut ? styles.active : ""}
                >
                  <ShoppingCartOutlined /> Đơn hàng đã mua{" "}
                </a>
              </li>
              <li
                onClick={() => hanldCheck(false)}
                className={!checkOut ? styles.active : ""}
              >
                <a>
                  <ProfileOutlined /> Thông tin và sổ địa chỉ
                </a>
              </li>
            </ul>
            <a href="#!" onClick={() => signOut()} className={styles.btnLogout}>
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
              {order.length === 0 && (
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
              )}

              {order.length > 0 && (
                <div className={styles.listOrder}>
                  {order.map((item, index) => (
                    <div key={index} className={styles.product}>
                      <div className={styles.status}>
                        <p>
                          Ngày đặt hàng:{" "}
                          {new Date(item.createdAt).toLocaleDateString()}
                        </p>
                        <div style={{ display: "flex", gap: "20px" }}>
                          <p>
                            Trạng thái: <strong>{item.status}</strong>
                          </p>
                        </div>
                      </div>

                      <div className={styles.productItem}>
                        {item.products.map((product, productIndex) => (
                          <div key={productIndex} className={styles.productImg}>
                            <Image
                              src={product.productId.image[0]}
                              alt={product.productId.name}
                              height={100}
                              width={100}
                              style={{ border: "1px solid aqua" }}
                            />
                            <div className={styles.productInfo}>
                              <p>{product.productId.name}</p>
                              <p>
                                Màu sắc:{" "}
                                {product.productId.color ||
                                  "Không có thông tin"}
                              </p>
                              <p>
                                Số lượng:{" "}
                                {item?.products[productIndex].quantity || 0}
                              </p>
                            </div>
                            <div className={styles.productPrice}>
                              <p>Giá: {product.price.toLocaleString()} đ</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className={styles.total}>
                        <p>Thành tiền: </p>
                        <strong>{item.totalAmount.toLocaleString()} đ</strong>
                      </div>

                      <div className={styles.lh}>
                        <div className={styles.lhYourcancel}>
                          {item.status === "BỊ HỦY BỎ" ? (
                            <p>Bị hủy bởi bạn</p>
                          ) : (
                            <p></p>
                          )}
                        </div>
                        <div className={styles.lhBtn}>
                          {(item.status === "CHỜ XÁC NHẬN" ||
                            item.status === "ĐÃ XÁC NHẬN") && (
                            <button
                              onClick={() => handleSelectCancel(item._id)}
                            >
                              Hủy Đơn hàng
                            </button>
                          )}

                          {(item.status === "ĐANG VẬN CHUYỂN" ||
                            item.status === "HOÀN THÀNH") && (
                            <button>Mua lại</button>
                          )}

                          {item.status === "BỊ HỦY BỎ" && (
                            <div style={{ display: "flex", gap: "10px" }}>
                              <button>Mua lại</button>
                              <button>Xem chi tiết hủy</button>
                            </div>
                          )}

                          <button>Liên Hệ LESSON</button>
                        </div>
                      </div>

                      {cancel[item._id] && (
                        <div className={styles.cancelOrder}>
                          <div>
                            <p>Bạn có chắc chắn muốn hủy đơn hàng này?</p>
                            <div className={styles.lh}>
                              <button
                                onClick={() => hanldCancelOrder(item._id)}
                              >
                                Có
                              </button>
                              <button onClick={() => handleCancel(item._id)}>
                                Không
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
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
                      Anh{" "}
                      <span id="username">
                        {/* {session?.user.name} -{" "} */}
                        {user?.name} -{" "}
                        {session?.user.phone === "Không xác định"
                          ? "Số điện thoại hiện đang khả dụng"
                          : // : session?.user.phone}
                            user?.phone}
                      </span>
                    </p>
                    {edit === true ? (
                      ""
                    ) : (
                      <a href="#!" onClick={() => hanldEdit(true)}>
                        <EditOutlined />
                        <span>Sửa</span>
                      </a>
                    )}
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
                            value={name}
                            onChange={hanldEditName}
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
                            value={phone}
                            onChange={hanldEditPhone}
                          />
                        </div>
                      </div>
                      <div className={styles.btnProfileEdit}>
                        <a href="#!" onClick={() => hanldEdit(false)}>
                          Hủy bỏ
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.addressArea}>
                <h3>ĐỊA CHỈ NHẬN HÀNG</h3>
                <div
                  style={{ display: "flex", gap: "20px", marginBottom: "10px" }}
                >
                  <p>
                    {session?.user.address === "Không xác định"
                      ? "Vui lòng thêm địa chỉ để đặt hàng !"
                      : // : session?.user.address}
                        user?.address}
                  </p>
                  {editAddress === true ? (
                    ""
                  ) : (
                    <a href="#!" onClick={() => handEditAddress(true)}>
                      <EditOutlined />
                      <span>Sửa</span>
                    </a>
                  )}
                </div>

                {editAddress === true && (
                  <div>
                    <Input
                      placeholder="Nhập địa chỉ nhận hàng"
                      value={address}
                      onChange={hanldEditAddress}
                    />
                    <div className={styles.btnProfileEdit}>
                      <a href="#!" onClick={() => handEditAddress(false)}>
                        Hủy bỏ
                      </a>
                    </div>
                  </div>
                )}

                {(edit || editAddress) && (
                  <a
                    href="#!"
                    className={styles.button}
                    onClick={hanldEditUsers}
                  >
                    CẬP NHẬT
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default User;
