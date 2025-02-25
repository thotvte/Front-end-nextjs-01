"use client";
import styles from "../cart.module.css";
import Image from "next/image";
import logo from "../../../../../public/assets/imgs/location.png";
import xaomi from "../../../../../public/assets/imgs/xiaomi.jpg";
import { LeftOutlined, RightOutlined, ShopOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Cart from "../page";
import { useSession } from "next-auth/react";

interface ChoosedeliveryTopProps {
  cart: Cart;
}

const ChoosedeliveryTop: React.FC<ChoosedeliveryTopProps> = ({ cart }) => {
  const [action, setAction] = useState(false);
  const { data: session, status } = useSession();

  const handleAction = (option: boolean) => {
    setAction(option);
  };

  const [quantities, setQuantities] = useState(
    cart.products.reduce((acc, item) => {
      acc[item._id] = item.quantity;
      return acc;
    }, {} as Record<string, number>)
  );

  const handleMinus = (productId: string) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      if (updatedQuantities[productId] > 1) {
        updatedQuantities[productId] -= 1;
      }
      return updatedQuantities;
    });
  };

  const handleAdd = (productId: string) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[productId] += 1;
      return updatedQuantities;
    });
  };

  const calculateTotalAmount = () => {
    return cart.products.reduce(
      (total, item) =>
        total + item.productId.price * (quantities[item._id] || item.quantity),
      0
    );
  };

  const [totalAmount, setTotalAmount] = useState(calculateTotalAmount());

  // Cập nhật lại tổng tiền khi quantities thay đổi
  useEffect(() => {
    setTotalAmount(calculateTotalAmount());
  }, [quantities]);

  const formatCurrency = (price: any) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };
  return (
    <>
      <div className={styles.cart}>
        <div className={styles.cartMain}>
          <div className={styles.cartTopContent}>
            <a href="/">
              <LeftOutlined />
            </a>
            <b className={styles.textBase}>Giỏ hàng</b>
          </div>
          <div className={styles.choosedeliveryTop}>
            <label
              className={`${styles.optionText} ${
                !action ? styles.selected1 : ""
              }`}
            >
              <input
                type="radio"
                name="deliveryOption"
                checked={!action}
                onChange={() => handleAction(false)}
              />
              Giao tận nơi
            </label>

            <label
              className={`${styles.optionText} ${
                action ? styles.selected2 : ""
              }`}
            >
              <input
                type="radio"
                name="deliveryOption"
                checked={action}
                onChange={() => handleAction(true)}
              />
              Nhận tại siêu thị
            </label>
          </div>
        </div>
      </div>
      <div className={styles.cart}>
        <div className={styles.cartMain}>
          <div className={styles.middleCart}>
            <div className={styles.cartFragment}>
              {!action &&
                (session?.user.address == "Không xác định" ? (
                  <div className={styles.location1}>
                    <div>
                      <div>
                        {session.user.phone == "Không xác định" ? (
                          <span className={styles.titlemiddcart1}>
                            Vui lòng cung cấp thông tin khi nhận hàng
                          </span>
                        ) : (
                          <span className={styles.titlemiddcart1}>
                            Người nhận : {session.user.name} -{" "}
                            {session.user.phone}
                          </span>
                        )}
                      </div>
                      <div>
                        <span className={styles.textmiddCart1}>
                          {" "}
                          <Image
                            src={logo}
                            alt="xaomi"
                            width={12}
                            height={12}
                            style={{ cursor: "pointer", marginRight: "7px" }}
                          ></Image>{" "}
                          Đà Nẵng
                        </span>
                      </div>
                    </div>
                    <div className={styles.action1}>
                      <RightOutlined />
                    </div>
                  </div>
                ) : (
                  <div>
                    <span className={styles.textmiddCart1}>
                      {" "}
                      <Image
                        src={logo}
                        alt="xaomi"
                        width={12}
                        height={12}
                        style={{ cursor: "pointer", marginRight: "7px" }}
                      ></Image>{" "}
                      {session?.user.address}
                    </span>
                  </div>
                ))}

              {action && (
                <div className={styles.location2}>
                  <span className={styles.titlemiddcart2}>
                    <ShopOutlined /> Vui lòng chọn siêu thị nhận hàng
                  </span>

                  <div className={styles.action2}>
                    <RightOutlined />
                  </div>
                </div>
              )}

              {cart.products.map((item) => (
                <div key={item._id} className={styles.productList}>
                  <div className={styles.productItem}>
                    <div className={styles.productItemInfo}>
                      <div className={styles.classImg}>
                        <a href="" target="_blank">
                          <Image
                            src={item.productId.image[0]}
                            alt={""}
                            width={80}
                            height={80}
                          />
                        </a>
                      </div>

                      <div className={styles.productItemRight}>
                        <div className={styles.productRightInfo}>
                          <a href="">{item.productId.name}</a>
                          <span>{formatCurrency(item.productId.price)}</span>
                        </div>
                        <div className={styles.productItemRightInfoOther}>
                          <p>{item.color}</p>
                          <div className={styles.promotion}>
                            <div>
                              <span>Phiếu mua hàng trị giá 100.000đ</span>
                            </div>
                            <div>
                              <span>Tặng 1 cục sạc trị giá 150.000đ</span>
                            </div>

                            <div className={styles.quantityBox}>
                              <div className={styles.productQuantity}>
                                <button
                                  className={styles.productQuantityRemove}
                                >
                                  Xóa
                                </button>
                                <div className={styles.productQuantityBtn}>
                                  <button onClick={() => handleMinus(item._id)}>
                                    -
                                  </button>
                                  <input
                                    type="text"
                                    value={quantities[item._id] || 1} // Lấy số lượng của sản phẩm từ state quantities
                                    inputMode="numeric"
                                    readOnly
                                  />
                                  <button onClick={() => handleAdd(item._id)}>
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className={styles.totalProvisional}>
                <span>
                  Tạm tính (
                  {cart.products.reduce(
                    (total, item) =>
                      total + (quantities[item._id] || item.quantity),
                    0
                  )}{" "}
                  sản phẩm)
                </span>
                <span>{formatCurrency(totalAmount)}</span>
                {/* <span>{cart.totalAmount}</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoosedeliveryTop;
