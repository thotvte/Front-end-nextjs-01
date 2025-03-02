"use client";
import styles from "../cart.module.css";
import Image from "next/image";
import logo from "../../../../../public/assets/imgs/location.png";
import xaomi from "../../../../../public/assets/imgs/xiaomi.jpg";
import { LeftOutlined, RightOutlined, ShopOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Cart from "../page";
import { useSession } from "next-auth/react";
import axios from "axios";

interface ChoosedeliveryTopProps {
  cart: Cart;
}

const ChoosedeliveryTop: React.FC<ChoosedeliveryTopProps> = ({ cart }) => {
  const [action, setAction] = useState(false);
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [selectDelete, setSelectDelete] = useState<Record<string, boolean>>({});
  const handleAction = (option: boolean) => {
    setAction(option);
  };

  const handleSelectDelete = (id: string) => {
    setSelectDelete((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const handleCancelDelete = (id: string) => {
    setSelectDelete((prev) => ({
      ...prev,
      [id]: false,
    }));
  };
  const [quantities, setQuantities] = useState(
    cart.products.reduce((acc, item) => {
      acc[item._id] = item.quantity;
      return acc;
    }, {} as Record<string, number>)
  );

  const handleAddCart = async (productId: string) => {
    if (!session?.user?.access_token) {
      console.error("Không có token, yêu cầu không thể thực hiện.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/carts`,
        {
          products: [{ productId: productId, quantity: 1 }],
        },
        {
          headers: {
            Authorization: `Bearer ${session.user.access_token}`,
          },
        }
      );
      window.location.reload();

      console.log("Sản phẩm đã được thêm số lương sản phẩm +1:", response.data);
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
    }
    console.log(productId);
  };

  const handleMinusCart = async (productId: string) => {
    if (!session?.user?.access_token) {
      console.error("Không có token, yêu cầu không thể thực hiện.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/carts`,
        {
          products: [{ productId: productId, quantity: -1 }],
        },
        {
          headers: {
            Authorization: `Bearer ${session.user.access_token}`,
          },
        }
      );
      window.location.reload();
      console.log(
        "Sản phẩm đã được giảm số lương của sản phẩm -1:",
        response.data
      );
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
    }
    console.log(productId);
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!session?.user?.access_token) {
      console.error("Không có token, yêu cầu không thể thực hiện.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/carts/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${session.user.access_token}`,
          },
        }
      );
      window.location.reload();

      console.log("Sản phẩm đã được Delete:", response.data);
    } catch (error) {
      console.error("Lỗi khi Delete sản phẩm vào giỏ hàng:", error);
    }
  };

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
              {!action && (
                <div className={styles.location1}>
                  <div>
                    <div style={{ paddingBottom: "3px" }}>
                      <span className={styles.textmiddCart1}>
                        {" "}
                        <strong>Người nhận : </strong>
                        {session?.user.name} - {session?.user.phone}
                      </span>
                    </div>
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
                </div>
              )}

              {action && (
                <div className={styles.location2}>
                  <div>
                    <span className={styles.textmiddCart1}>
                      {" "}
                      <strong>Người nhận : </strong>
                      {session?.user.name} - {session?.user.phone}
                    </span>
                  </div>
                  <span className={styles.titlemiddcart2}>
                    <ShopOutlined /> Vui lòng chọn siêu thị nhận hàng
                  </span>
                </div>
              )}

              {cart.products.map((item, index) => (
                <div
                  key={item._id}
                  className={`${styles.productList} ${
                    index === 0 ? "" : styles.nthProductList
                  }`}
                >
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
                                {!selectDelete[item.productId._id] && (
                                  <button
                                    className={styles.productQuantityRemove}
                                    onClick={() =>
                                      handleSelectDelete(item.productId._id)
                                    }
                                  >
                                    Xóa
                                  </button>
                                )}
                                <div className={styles.productQuantityBtn}>
                                  <button
                                    onClick={() =>
                                      handleMinusCart(item.productId._id)
                                    }
                                    disabled={quantities[item._id] === 1}
                                  >
                                    -
                                  </button>
                                  <input
                                    type="text"
                                    value={quantities[item._id] || 1} // Lấy số lượng của sản phẩm từ state quantities
                                    inputMode="numeric"
                                    readOnly
                                  />
                                  <button
                                    onClick={() =>
                                      handleAddCart(item.productId._id)
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {selectDelete[item.productId._id] && (
                          <div className={styles.deleteProduct}>
                            <span>Bạn chắc chắn muốn xóa sản phẩm này?</span>
                            <div className={styles.btnDeleteProduct}>
                              <button
                                onClick={() =>
                                  handleCancelDelete(item.productId._id)
                                }
                              >
                                Không xóa
                              </button>
                              <button
                                onClick={() =>
                                  handleDeleteProduct(item.productId._id)
                                }
                              >
                                Xóa
                              </button>
                            </div>
                          </div>
                        )}
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
                <span>{formatCurrency(cart.totalAmount)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoosedeliveryTop;
