// ProductInfo.tsx
"use client"; // Đảm bảo rằng bạn sử dụng client-side logic

import { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/components/MainLayout/header/page";
import Footer from "@/components/MainLayout/footer/page";
import ProductInfoTop from "./components/ProductInfoTop";
import ProductInfoLeft from "./components/ProductInfoLeft";
import ProductInfoRight from "./components/ProductInfoRight";

// Định nghĩa kiểu dữ liệu sản phẩm
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

const ProductInfo = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<Products | null>(null); // Dữ liệu sản phẩm duy nhất

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Products>(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Không tìm thấy sản phẩm.</div>;

  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#F2F4F7" }}>
        {/* Truyền dữ liệu sản phẩm vào ProductInfoTop */}
        <ProductInfoTop product={product} />
        <div
          className="main-content"
          style={{ display: "flex", boxSizing: "border-box", gap: "20px" }}
        >
          <ProductInfoLeft product={product} />
          <ProductInfoRight product={product} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductInfo;
