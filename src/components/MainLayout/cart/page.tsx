"use client";
import Header from "@/components/MainLayout/header/page";
import ChoosedeliveryTop from "./components/choosedeliveryTop";
import Option from "./components/optionCart";
import Paycart from "./components/payCart";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { authenticate } from "@/utils/actions";
import EmptyCartPage from "./components/emptyCart";
import { Spin } from "antd";
import Product from "../products/page";

interface Product {
  productId: any;
  quantity: number;
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

interface Cart {
  _id: string;
  user: string;
  products: Product[];
  createdAt: string;
  updatedAt: string;
  totalAmount: number;
}

interface ApiResponse {
  statusCode: number;
  message: string;
  data: Cart[];
}

const Cart = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [cart, setCart] = useState<Cart | null>(null);
  const { data: session, status } = useSession();

  console.log(cart);

  useEffect(() => {
    const fetchCarts = async () => {
      setLoading(true);
      try {
        const token = session?.user?.access_token;

        if (!token) {
          console.error("Không có token, yêu cầu không thể thực hiện.");
          return;
        }
        {
          const response = await axios.get<ApiResponse>(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/carts`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setCart(response.data.data[0]);
        }
      } catch (error) {
        console.error("Lỗi khi lấy Cart:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCarts();
  }, [session]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      {cart && cart.products.length >= 1 ? (
        <>
          <ChoosedeliveryTop cart={cart} />
          <Option cart={cart} />
          <Paycart />
        </>
      ) : (
        <>
          <EmptyCartPage />
        </>
      )}
    </>
  );
};

export default Cart;
