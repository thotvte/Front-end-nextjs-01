"use client";
import React, { useEffect, useState } from "react";
import Product from "./productItem";
import styles from "./product.module.css";
import { Pagination } from "antd";
import axios from "axios";

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
  data: {
    meta: {
      current: number;
      pageSize: number;
      totalPages: number;
      totalItems: number;
    };
    results: Products[];
  };
}

const ListProduct = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Products[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const pageSize = 24;

  // Effect to fetch products based on page number
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get<ApiResponse>(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products`,
          {
            params: {
              current: currentPage, // Send current page to the backend
              pageSize: pageSize, // Send page size to the backend
            },
          }
        );
        setProducts(response.data.data.results);
        setTotalProducts(response.data.data.meta.totalItems);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const formatCurrency = (price: any) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update current page
  };

  return (
    <div>
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

      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={totalProducts}
        onChange={handlePageChange}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      />
    </div>
  );
};

export default ListProduct;
