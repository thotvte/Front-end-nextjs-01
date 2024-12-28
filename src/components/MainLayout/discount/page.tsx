"use client";
import Image from "next/image";
import Soc from "../../assets/icons/soc.png";
import Live from "../../assets/icons/live.png";
import Ip from "../../assets/icons/ip.png";
import Tgdd from "../../assets/imgs/tgdd.png";
import styles from "./discount.module.css";
import "../../../app/globals.css";

const Discount = () => {
  return (
    <div>
      <div className="main-content">
        <div style={{ display: "flex", padding: "3px 0 3px 0" }}>
          <div className={styles.body}>
            <Image src={Soc} alt={"Sốc"} height={30} width={30} />
            <p>Deal chớp nhoáng</p>
            <Image src={Live} alt={"Sốc"} height={30} width={30} />
            <p>Săn iPhone 16 Pro Max từ 33.190k tại TikTok Shop</p>
            <Image src={Ip} alt={"Sốc"} height={30} width={30} />
            <p>X2 tốc độ .MacBook giá vẩn thế!</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
          }}
        >
          <Image
            src={Tgdd}
            alt=""
            height={285}
            width={1170}
            style={{
              background: "#FFF",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Discount;
