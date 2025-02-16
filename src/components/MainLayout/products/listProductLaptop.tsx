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
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products/categories/67908b1be8f367b34f95606e`
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

  const brands = [
    "HP",
    "ASUS",
    "DELL",
    "LENOVO",
    "ACER",
    "MACBOOK",
    "MSI",
    "SAMSUNG",
  ];

  const title = [
    "Giá",
    "Loại sản phẩm",
    "Kích cỡ màn hình",
    "Ram",
    "Intel Core i/Core/Celeron/Pentium",
    "Độ phân giải",
    "tần số quét",
    "Công nghệ đặc biệt",
    "Tính năng đặc biệt",
  ];

  const price = [
    "Dưới 10 triệu",
    "10 - 15 triệu",
    "15 - 20 triệu",
    "20 - 25 triệu",
    "25 - 30 triệu",
    "Trên 30 triệu",
  ];

  const ram = [
    "4 GB",
    "6 GB",
    "8 GB",
    "12 GB",
    "16 GB",
    "18 GB",
    "24 GB",
    "32 GB",
    "36 GB",
    "48 GB",
    "64 GB",
    "96 GB",
  ];

  const demand = [
    "Khoảng 13 inch",
    "Khoảng 14 inch",
    "Khoảng 15 inch",
    "Khoảng 16 inch",
    "Khoảng 14.5 inch",
  ];
  const resolution = ["2K", "4K", "RETINA", "FULL HD", "HD"];

  const ScanFrequency = ["165 HZ", "144 HZ", "90 HZ", "120 HZ", "240 HZ"];

  const storageCapacity = [
    "Core i9",
    "Core i7",
    "Core i5",
    "Core i3",
    "Core 7",
    "Core 5",
    "Celeron/Pentium",
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

  const typeLaptop = [
    "Laptop AI",
    "Gaming",
    "Học tập, văn phòng",
    "Đồ họa",
    "Kỹ thuật",
    "Mỏng nhẹ",
    "Cao cấp",
  ];

  const formatCurrency = (price: any) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div>
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
        typePhone={typeLaptop}
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
  );
};

export default ListProductDT;
