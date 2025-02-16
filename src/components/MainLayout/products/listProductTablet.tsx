"use client";
import React, { useEffect, useState } from "react";
import Product from "./productItem";
import styles from "./product.module.css";
import axios from "axios";
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
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products/categories/67908d56e8f367b34f95607c`
        );
        console.log("API Response:", response.data.data);
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
    "Samsung",
    "iPad",
    "Oppo",
    "Xiaomi",
    "Chơi game / Cấu hình cao",
    "Hỗ trợ nghe gọi",
    "Pin trên 7000 mAh",
    "Adroid",
  ];

  const title = [
    "Giá",
    "Loại sản phẩm",
    "Kích cỡ màn hình",
    "Ram",
    "Dung lượng lưu trữ",
    "Độ phân giải",
    "tần số quét",
    "Công nghệ đặc biệt",
    "Tính năng đặc biệt",
  ];

  const price = [
    "Dưới 5 triệu",
    "5 - 10 triệu",
    "10 - 15 triệu",
    "15 - 20 triệu",
    "20 - 25 triệu",
    "Trên 25 triệu",
  ];

  const ram = ["3 GB", "4 GB", "6 GB", "8 GB", "12 GB", "16 GB"];

  const demand = [
    "Khoảng 9 inch",
    "Khoảng 10 inch",
    "Khoảng 11 inch",
    "Khoảng 12 inch",
    "Trên 12 inch",
  ];
  const resolution = ["2K", "4K", "RETINA", "FULL HD", "HD"];

  const ScanFrequency = ["165 HZ", "144 HZ", "90 HZ", "120 HZ", "240 HZ"];

  const storageCapacity = [
    "32 GB",
    "64 GB",
    "128 GB",
    "256 GB",
    "512 GB",
    "1 TB",
    "2 TB",
  ];

  const ChargingFeature = [
    "CPU Intel thế hệ 14 (mới nhất)",
    "Card rời RTX 40 series",
    "CPU Intel Core Ultra (mới nhất)",
    "Công nghệ Wifi 6",
    "Tiêu chuẩn Intel Evo",
    "Card đồ họa rời",
  ];

  const SpecialFeatures = [
    "Cảm ứng",
    "Gập 360 độ",
    "Chống chói (Anti Glare)",
    "100% sRGB",
    "Màn hình OLED",
  ];

  const typeTablet = ["IPadOS", "Android"];

  return (
    <div>
      <Filter
        title={title}
        brands={brands}
        price={price}
        ram={ram}
        demand={demand}
        resolution={resolution}
        scanFrequency={ScanFrequency}
        storageCapacity={storageCapacity}
        chargingFeature={ChargingFeature}
        specialFeatures={SpecialFeatures}
        typePhone={typeTablet}
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
  );
};

export default ListProductDT;
