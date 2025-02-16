"use client";
import React, { useEffect, useState } from "react";
import Product from "./productItem";
import styles from "./product.module.css";
import axios from "axios";
import Image from "next/image";
import Filter from "./filter";

interface Products {
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

interface ApiResponse {
  statusCode: number;
  message: string;
  data: Products[];
}

const ListProductDT = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get<ApiResponse>(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products/categories/67908b05e8f367b34f95606c`
        );
        setProducts(response?.data?.data);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const formatCurrency = (price: any) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const brands = [
    "SamSung",
    "Iphone",
    "Oppo",
    "Xiaomi",
    "Vivo",
    "Realme",
    "Nokia",
  ];
  const price = [
    "Dưới 2 triệu",
    "2 - 4 triệu",
    "4 - 7 triệu",
    "7 - 13 triệu",
    "13 - 20 triệu",
    "Trên 20 triệu",
  ];

  const ram = ["3 GB", "4 GB", "6 GB", "8 GB", "12 GB", "16 GB"];

  const demand = [
    "Chơi game / Cấu hình cao",
    "Pin khủng trên 5000 mAh",
    "Chụp ảnh, quay phim",
    "Livestream",
    "Mỏng nhẹ",
  ];
  const resolution = [
    "QQVGA",
    "QVGA",
    "HD+",
    "FULL HD+",
    "1.5K",
    "1.5K+",
    "2K",
    "RETINA (IPHONE)",
  ];

  const ScanFrequency = ["60 HZ", "144 HZ", "90 HZ", "120 HZ"];

  const storageCapacity = ["64 GB", "128 GB", "256 GB", "512 GB", "1T"];

  const ChargingFeature = [
    "Sạc nhanh (từ 20W)",
    "Sạc siêu nhanh (từ 60W)",
    "Sạc không dây",
  ];

  const SpecialFeatures = [
    "Kháng nước, bụi",
    "Hỗ trợ 5G",
    "Bảo mật khuôn mặt 3D",
    "Công nghệ NFC",
  ];

  const typePhone = ["Android", "iPhone (IOS)", "Điện thoại phổ thông "];
  const title = [
    "Giá",
    "Loại điện thoại",
    "Nhu cầu",
    "Ram",
    "Dung lượng lưu trữ",
    "Độ phân giải",
    "tần số quét",
    "Tính năng sạc",
    "Tính năng đặc biệt",
  ];
  return (
    <div>
      <div className={styles.all}>
        <Filter
          brands={brands}
          price={price}
          ram={ram}
          demand={demand}
          resolution={resolution}
          scanFrequency={ScanFrequency}
          storageCapacity={storageCapacity}
          chargingFeature={ChargingFeature}
          specialFeatures={SpecialFeatures}
          typePhone={typePhone}
          title={title}
        />
        <div className={styles.listproduct}>
          {products.map((product) => (
            <Product
              id={product._id}
              key={product._id}
              title={product.name}
              originalPrice={formatCurrency(
                product.price * (1 - product.discount / 100)
              )}
              oldPrice={formatCurrency(product.price)}
              discount={product.discount}
              image={product.image[0]}
              category={""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProductDT;
