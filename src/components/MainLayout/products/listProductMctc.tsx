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
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products/categories/67908d64e8f367b34f95607e`
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
    "Điện thoại",
    "Tablet",
    "Laptop",
    "Đồng hồ",
    "Phụ kiện",
    "Màn hình / PC",
    "Sạc dự phòng",
    "Camera",
  ];

  return (
    <div>
      <Filter
        title={[]}
        brands={brands}
        price={[]}
        ram={[]}
        demand={[]}
        resolution={[]}
        scanFrequency={[]}
        storageCapacity={[]}
        chargingFeature={[]}
        specialFeatures={[]}
        typePhone={[]}
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
