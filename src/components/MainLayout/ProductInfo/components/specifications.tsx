import React, { useState } from "react";
import styles from "../styles.module.css";

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

const Specifications = ({ product }: { product: Products }) => {
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
                  <strong>Hệ điều hành:</strong>
                </aside>
                <aside>
                  {/* <span>CD350 15539</span> */}
                  <span>{product.data.operatingSystem}</span>
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Chip xử lý (CPU):</strong>
                </aside>
                <aside>
                  {/* <span>Sạc</span> */}
                  <span>{product.data.cpu}</span>
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Tốc độ CPU:</strong>
                </aside>
                <aside>
                  {/* <span>Type C 25W</span> */}
                  <span>{product.data.cpuSpeed}</span>
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Chip đồ họa (GPU):</strong>
                </aside>
                <aside>
                  {/* <span>25 W</span> */}
                  <span>{product.data.gpu}</span>
                </aside>
              </li>

              <li>
                <aside>
                  <strong>RAM:</strong>
                </aside>
                <aside>
                  {/* <span>Dài 6.69 cm - Ngang 3.8 cm - Cao 2.2 cm</span> */}
                  <span>{product.data.ram}</span>
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Dung lượng lưu trữ:</strong>
                </aside>
                <aside>
                  <a className={styles.tzLink} href="#!" target="_blank">
                    {product.data.storageCapacity}
                  </a>
                  {/* <a className={styles.tzLink} href="#!" target="_blank">
                    Power Delivery
                  </a> */}
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Độ phân giải camera sau:</strong>
                </aside>
                <aside>
                  {/* <span>Việt Nam</span> */}
                  <span>{product.data.cameraResolution}</span>
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Công nghệ màn hình:</strong>
                </aside>
                <aside>
                  {/* <span>Hàn Quốc</span> */}
                  <span>{product.data.screenTechnology}</span>
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Độ phân giải màn hình:</strong>
                </aside>
                <aside>
                  {/* <span>Samsung</span> */}
                  {product.data.screenResolution}
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Màn hình rộng:</strong>
                </aside>
                <aside>
                  {/* <span>Samsung</span> */}
                  {product.data.widescreen}
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Dung lượng pin:</strong>
                </aside>
                <aside>
                  {/* <span>Samsung</span> */}
                  {product.data.batteryCapacity}
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Hỗ trợ sạc tối đa:</strong>
                </aside>
                <aside>
                  {/* <span>Samsung</span> */}
                  {product.data.maximumChargingSupport}
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Thiết kế:</strong>
                </aside>
                <aside>
                  {/* <span>Samsung</span> */}
                  {product.data.design}
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Chất liệu:</strong>
                </aside>
                <aside>
                  {/* <span>Samsung</span> */}
                  {product.data.material}
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Kích thước, khối lượng:</strong>
                </aside>
                <aside>
                  {/* <span>Samsung</span> */}
                  {product.data.sizeAndVolume}
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Thời điểm ra mắt:</strong>
                </aside>
                <aside>
                  {/* <span>Samsung</span> */}
                  {product.data.theLaunchTime}
                </aside>
              </li>

              <li>
                <aside>
                  <strong>Hãng</strong>
                </aside>
                <aside>
                  {/* <span>Samsung</span> */}
                  {product.data.company.name}
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
