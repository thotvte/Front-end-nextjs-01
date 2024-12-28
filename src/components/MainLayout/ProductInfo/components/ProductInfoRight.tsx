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
const ProductInfoRight: React.FC = () => {
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
            Trắng
          </a>

          <a href="#!" className={styles.box03Item2}>
            <div className={styles.circle2} />
            Đen
          </a>
        </div>
      </div>

      <div className={styles.box04Txt}>
        Giá tại{" "}
        <a href="#!">
          Hồ Chí Minh <DownOutlined />
        </a>
      </div>

      <div className={styles.priceOne}>
        <div className={styles.boxPrice}>
          <p className={styles.boxPricePresent}>440.000₫ </p>
          <p className={styles.boxPriceOld}>550.000₫</p>
          <p className={styles.boxPricePercent}>-20%</p>
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
            <a href="#!" className={styles.onoffdelibox}>
              <HomeOutlined style={{ marginRight: "10px" }} />
              Chọn địa chỉ nhận hàng để biết thời gian giao.
            </a>
          </p>
        </div>

        <div className={styles.loyalty}>
          <p>
            <b>+1.625</b> điểm tích lũy Quà Tặng VIP
          </p>
          <i></i>
        </div>

        <div className={styles.blockButton}>
          <a href="#!" className={styles.btnBuynow1}>
            <ShoppingCartOutlined />
            Thêm vào giỏ hàng
          </a>
          <a href="#!" className={styles.btnBuynow2}>
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
