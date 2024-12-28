import React, { useState } from "react";
import styles from "../styles.module.css";

// Component Tab để tái sử dụng
interface TabProps {
  index: number;
  label: string;
  selectedIndex: number | null;
  onClick: (index: number) => void;
}

const Tab: React.FC<TabProps> = ({ index, label, selectedIndex, onClick }) => {
  const isSelected = selectedIndex === index;

  return (
    <h2
      onClick={() => onClick(index)}
      style={{
        display: "flex",
        border: "1px solid #e5e5e5",
        justifyContent: "center",
        width: "245px",
        padding: "10px 0",
        borderRadius: "12px",
        cursor: "pointer",
        color: isSelected ? "#2A83E9" : "#344054",
        backgroundColor: isSelected ? "#F1F8FE" : "initial",
      }}
    >
      {label}
    </h2>
  );
};

const Specifications: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Hàm xử lý khi nhấn vào <h2>
  const handleClick = (index: number): void => {
    setSelectedIndex(index); // Cập nhật chỉ số phần tử được nhấn
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
        {/* Tái sử dụng component Tab */}
        <Tab
          index={1}
          label="Thông số kỹ thuật"
          selectedIndex={selectedIndex}
          onClick={handleClick}
        />
        <Tab
          index={2}
          label="Bài viết đánh giá"
          selectedIndex={selectedIndex}
          onClick={handleClick}
        />
      </div>
      <div className={styles.specifications}>
        <div className={styles.boxSpecifi}>
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
        </div>
      </div>
    </div>
  );
};

export default Specifications;
