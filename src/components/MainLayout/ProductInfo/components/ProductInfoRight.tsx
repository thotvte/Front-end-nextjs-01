"use client";
import Image from "next/image";
import styles from "../styles.module.css";
import paylater from "../../../../../public/assets/imgs/paylater.png";
import {
  DownOutlined,
  HeartOutlined,
  HomeOutlined,
  PhoneOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useSession } from "next-auth/react";
import logo from "../../../../../public/assets/imgs/location.png";
import { useEffect } from "react";
import axios from "axios";
import { notification } from "antd";

interface Products {
  data: any;
  _id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  discount: number;
  image: string[];
  category: string;
  ram: string;
  storageCapacity: string;
  cpu: string;
  gpu: string;
  operatingSystem: string;
  cpuSpeed: string;
  cameraResolution: string;
  screenTechnology: string;
  screenResolution: string;
  widescreen: string;
  batteryCapacity: string;
  maximumChargingSupport: string;
  design: string;
  theLaunchTime: string;
  material: string;
  sizeAndVolume: string;
  company: string;
  color: string;
}

const ProductInfoRight = ({ product }: { product: Products }) => {
  const { data: session, status } = useSession();

  console.log("product", product.data._id);

  const formatCurrency = (price: any) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const handleAddCart = async () => {
    if (!session?.user?.access_token) {
      console.error("Không có token, yêu cầu không thể thực hiện.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/carts`,
        {
          products: [{ productId: product.data._id, quantity: 1 }],
        },
        {
          headers: {
            Authorization: `Bearer ${session.user.access_token}`,
          },
        }
      );
      notification.success({
        message: "Thêm vào giỏ hàng thành công!",
        description: `${product.data.name} đã được thêm vào giỏ hàng của bạn.`,
        placement: "bottomRight", // Vị trí của thông báo
      });

      console.log("Sản phẩm đã được thêm vào giỏ hàng:", response.data);
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
    }
  };

  const handleBuyCart = async () => {
    if (!session?.user?.access_token) {
      console.error("Không có token, yêu cầu không thể thực hiện.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/carts`,
        {
          products: [{ productId: product.data._id, quantity: 1 }],
        },
        {
          headers: {
            Authorization: `Bearer ${session.user.access_token}`,
          },
        }
      );

      console.log("Sản phẩm đã được thêm vào giỏ hàng:", response.data);
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
    }
  };

  return (
    <div className={styles.boxRight}>
      <div className={styles.bannerDetail}>
        <Image
          src={paylater}
          alt={"PayLater"}
          width={430}
          height={107}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className={styles.scrollingInner}>
        <div className={styles.box03}>
          <a href="#!" className={styles.box03Item1}>
            <div className={styles.circle1} />
            {product.data.color}
          </a>

          {/* <a href="#!" className={styles.box03Item2}>
            <div className={styles.circle2} />
            Đen
          </a> */}
        </div>
      </div>

      <div className={styles.box04Txt}>
        Giá tại{" "}
        <a href="#!">
          Đà nẵng <DownOutlined />
        </a>
      </div>

      <div className={styles.priceOne}>
        <div className={styles.boxPrice}>
          <p className={styles.boxPricePresent}>
            {formatCurrency(
              product.data.price * (1 - product.data.discount / 100)
            )}
          </p>
          <p className={styles.boxPriceOld}>
            {formatCurrency(product.data.price)}
          </p>
          {product.data.discount > 1 ? (
            <p className={styles.boxPricePercent}>
              {product.data.discount + " %"}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className={styles.blockPrice1}>
        <div className={styles.blockPromo}>
          <div className={styles.prTop}>
            <p className={styles.prTxtb}>Khuyến mãi</p>
            <p className={styles.prTxt}>
              Giá khuyến mãi dự kiến áp dụng đến 23:59 | 31/12
            </p>
          </div>

          <div className={styles.prContent}>
            <div className={styles.prItem}>
              <div className={styles.t1}>
                <span className={styles.nb}>1</span>
                <div className={styles.divbRight}>
                  <p>
                    Trả chậm 0 Đồng - 0% Lãi suất kỳ hạn 1- 3 tháng khi thanh
                    toán qua HOME PayLater.{" "}
                    <a href="#!" target="_blank">
                      {" "}
                      (Xem chi tiết tại đây)
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.deliverytime}>
          <p className={styles.blue}>
            {session?.user.address == "Không xác định" ? (
              <a href="#!" className={styles.onoffdelibox}>
                {/* <ShopOutlined style={{ marginRight: "10px" }} /> */}
                <Image
                  src={logo}
                  alt="xaomi"
                  width={12}
                  height={12}
                  style={{ cursor: "pointer", marginRight: "7px" }}
                ></Image>{" "}
                Chọn địa chỉ nhận hàng để biết thời gian giao.
              </a>
            ) : (
              <a href="#!">
                <Image
                  src={logo}
                  alt="xaomi"
                  width={12}
                  height={12}
                  style={{ cursor: "pointer", marginRight: "7px" }}
                ></Image>
                {session?.user.address}
              </a>
            )}
          </p>
        </div>

        <div className={styles.loyalty}>
          <p>
            <b>+1.625</b> điểm tích lũy Quà Tặng VIP
          </p>
          <i></i>
        </div>

        <div className={styles.blockButton}>
          <a href="#!" className={styles.btnBuynow1} onClick={handleAddCart}>
            <ShoppingCartOutlined />
            Thêm vào giỏ hàng
          </a>
          <a href="/cart" className={styles.btnBuynow2} onClick={handleBuyCart}>
            Mua ngay
          </a>
        </div>

        <div>
          <p className={styles.callorder}>
            <PhoneOutlined style={{ width: "15px", height: "15px" }} /> Gọi đặt
            mua <a href="#!">1900 232 460</a> (8:00 - 21:30)
          </p>
          <a href="#!" className={styles.store}>
            <ShopOutlined />
            Xem siêu thị có hàng
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoRight;
