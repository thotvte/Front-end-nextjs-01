import React, { useState } from "react";
import styles from "../styles.module.css";

const Specifications: React.FC = () => {
  const [action, setAction] = useState(true);

  const handleClick = (index: boolean) => {
    setAction(index);
  };

  return (
    <div
      style={{
        width: "690px",
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        margin: "15px 0 25px ",
      }}
    >
      <div
        className=""
        style={{
          color: "#344054",
          textAlign: "center",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          fontWeight: "500",
          fontSize: "10px",
          paddingBottom: "10px",
          paddingTop: "20px",
        }}
      >
        <h2
          className={`${styles.tabSpec} ${action ? styles.actionCick : ""}`}
          onClick={() => handleClick(true)}
        >
          Thông số kỹ thuật
        </h2>
        <h2
          className={`${styles.tabSpec} ${!action ? styles.actionCick : ""}`}
          onClick={() => handleClick(false)}
        >
          Bài viết đánh giá
        </h2>
      </div>
      <div className={styles.specifications}>
        <div className={styles.boxSpecifi}>
          {action && (
            <ul className={styles.textSpecifi}>
              <li>
                <aside>
                  <strong>Model:</strong>
                </aside>
                <aside>
                  <span>CD350 15539</span>
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Chức năng:</strong>
                </aside>
                <aside>
                  <span>Sạc</span>
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Đầu ra:</strong>
                </aside>
                <aside>
                  <span>Type C 25W</span>
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Dòng sạc tối đa:</strong>
                </aside>
                <aside>
                  <span>25 W</span>
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Kích thước:</strong>
                </aside>
                <aside>
                  <span>Dài 6.69 cm - Ngang 3.8 cm - Cao 2.2 cm</span>
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Công nghệ/Tiện ích:</strong>
                </aside>
                <aside>
                  <a className={styles.tzLink} href="#!" target="_blank">
                    Công nghệ GaN
                  </a>
                  <a className={styles.tzLink} href="#!" target="_blank">
                    Power Delivery
                  </a>
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Sản xuất tại:</strong>
                </aside>
                <aside>
                  <span>Việt Nam</span>
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Thương hiệu của:</strong>
                </aside>
                <aside>
                  <span>Hàn Quốc</span>
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Hãng:</strong>
                </aside>
                <aside>
                  <span>Samsung</span>
                </aside>
              </li>
            </ul>
          )}

          {!action && (
            <ul className={styles.textSpecifi}>
              <li>
                • Với kích thước chỉ 2.8 x 2.8 x 3.6 cm, sản phẩm dễ dàng đồng
                hành cùng bạn trong mọi chuyến đi, từ túi xách đến góc làm việc
                gọn gàng.
              </li>
              <li>
                • Ngoài ra, adapter sạc 30W này cũng sở hữu chấu sạc có thể gấp
                gọn, đem lại sự tiện lợi khi mang theo củ sạc đi xa hoặc để
                trong nơi có không gian hẹp.
              </li>
              <li>
                • Công nghệ Power Delivery giúp adapter sạc Xmobile cùng công
                suất sạc tối đa 30W, đáp ứng linh hoạt các nhu cầu sạc của bạn.
                Từ sạc nhanh điện thoại, máy tính bảng đến các thiết bị hỗ trợ
                cổng Type C khác.
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Specifications;
