"use client";
import Policy from "./policy";
import Rating from "./Rating";
import Specifications from "./specifications";
import styles from "../styles.module.css";
import Image, { StaticImageData } from "next/image";
import anh1 from "../../../../../public/assets/imgs/sac1.jpg";
import anh2 from "../../../../../public/assets/imgs/sac2.jpg";
import anh3 from "../../../../../public/assets/imgs/sac3.jpg";
import anh4 from "../../../../../public/assets/imgs/sac4.jpg";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";

const ProductInfoLeft: React.FC = () => {
  const [action, setAction] = useState(anh1);

  const handOnclickImg = (anh: StaticImageData): void => {
    setAction(anh);
  };
  return (
    <div>
      <div
        style={{
          height: "500px",
          width: "690px",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
        }}
      >
        <div className={styles.sile}>
          <LeftOutlined className={styles.next} />
          <Image src={action} alt={""} width={570} height={380} />
          <RightOutlined className={styles.next} />
        </div>
        <div className={styles.buttonImg}>
          <Image
            src={anh2}
            alt={""}
            className={styles.buttonAction}
            onClick={() => handOnclickImg(anh1)}
          />
          <Image
            src={anh2}
            alt={""}
            className={styles.buttonAction}
            onClick={() => handOnclickImg(anh2)}
          />
          <Image
            src={anh2}
            alt={""}
            className={styles.buttonAction}
            onClick={() => handOnclickImg(anh3)}
          />

          <Image
            src={anh2}
            alt={""}
            className={styles.buttonAction}
            onClick={() => handOnclickImg(anh4)}
          />
        </div>
      </div>
      <Policy />
      <Specifications />
      <Rating />
    </div>
  );
};

export default ProductInfoLeft;
