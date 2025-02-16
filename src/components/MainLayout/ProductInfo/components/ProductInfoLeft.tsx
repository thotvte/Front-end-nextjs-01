"use client";
import Policy from "./policy";
import Rating from "./Rating";
import Specifications from "./specifications";
import styles from "../styles.module.css";
import Image, { StaticImageData } from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";

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

const ProductInfoLeft = ({ product }: { product: Products }) => {
  const [action, setAction] = useState(`${product.data.image[0]}`);

  const handOnclickImg = (anh: string): void => {
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
        {action && (
          <div className={styles.buttonImg}>
            {product.data.image.map((img: string, index: number) => (
              <Image
                key={index}
                src={img}
                alt={`image-${index}`}
                className={styles.buttonAction}
                onClick={() => handOnclickImg(img)}
                width={570}
                height={380}
              />
            ))}
          </div>
        )}
      </div>
      <Policy />
      <Specifications product={product} />
      <Rating />
    </div>
  );
};

export default ProductInfoLeft;
