"use client";
import Header from "@/components/MainLayout/header/page";
import ChoosedeliveryTop from "./components/choosedeliveryTop";
import Option from "./components/optionCart";
import Paycart from "./components/payCart";

const Cart = () => {
  return (
    <>
      <Header />
      <ChoosedeliveryTop />
      <Option />
      <Paycart />
    </>
  );
};

export default Cart;
