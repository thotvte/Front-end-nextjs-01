"use client";
import React, { useState } from "react";
import Footer from "../MainLayout/footer/page";
import Header from "../MainLayout/header/page";
import Discount from "../MainLayout/discount/page";
import MainContent from "../MainLayout/mainContent/page";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#F2F4F7" }}>
        <Discount />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
