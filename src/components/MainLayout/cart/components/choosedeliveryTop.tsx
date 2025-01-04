"use client";
import styles from "../cart.module.css";
import Image from "next/image";
import logo from "../../../../../public/assets/imgs/location.png";
import xaomi from "../../../../../public/assets/imgs/xiaomi.jpg";
import { LeftOutlined, RightOutlined, ShopOutlined } from "@ant-design/icons";
import { useState } from "react";

const ChoosedeliveryTop = () => {
  const [action, setAction] = useState(false);

  const handleAction = (option: boolean) => {
    setAction(option);
  };

  const [count, setCount] = useState(1);

  const handlAdd = () => {
    setCount(count + 1);
  };

  const handlMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
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
              {!action && (
                <div className={styles.location1}>
                  <div>
                    <div>
                      <span className={styles.titlemiddcart1}>
                        Vui lòng cung cấp thông tin khi nhận hàng
                      </span>
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
              )}

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
              <div className={styles.productList}>
                <div className={styles.productItem}>
                  <div className={styles.productItemInfo}>
                    <div className={styles.classImg}>
                      <a href="" target="_blank">
                        <Image src={xaomi} alt={""} width={80} height={80} />
                      </a>
                    </div>

                    <div className={styles.productItemRight}>
                      <div className={styles.productRightInfo}>
                        <a href="">Điện thoại Xiaomi Redmi A3 3GB/64GB</a>
                        <span>1.890.000đ</span>
                      </div>
                      <div className={styles.productItemRightInfoOther}>
                        <p>Màu xanh lá</p>
                        <div className={styles.promotion}>
                          <div>
                            <span>Phiếu mua hàng trị giá 100.000đ</span>
                          </div>
                          <div>
                            <span>Tặng 1 cục sạc trị giá 150.000đ</span>
                          </div>
                          <div className={styles.quantityBox}>
                            <div className={styles.productQuantity}>
                              <button className={styles.productQuantityRemove}>
                                Xóa
                              </button>
                              <div className={styles.productQuantityBtn}>
                                <button onClick={handlMinus}>-</button>
                                <input
                                  type="text"
                                  value={count}
                                  inputMode="numeric"
                                />
                                <button onClick={handlAdd}>+</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.totalProvisional}>
                <span>Tạm tính ({count} sản phẩm)</span>
                <span>1.890.000đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoosedeliveryTop;
